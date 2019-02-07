import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DatePickerCustomized from '../Common/datePicker'
import NumericInput from 'react-numeric-input'
import Select from 'react-select';
import AsyncSelect  from 'react-select/lib/Async';
import {withNamespaces} from 'react-i18next'

class AddSeanceForm extends Component{
    state = {
        cityId: 0,
        cinemaId: 0,
        hallId: 0,
        filmId: 0,
        dateTime: new Date(),
        seatPrices: [],
        services: []
    }

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    handlePriceChange(value, typeId) {
        let seatPrices = this.state.seatPrices.slice(0);
        let isSeatPriceExists = false;
        seatPrices
            .forEach(seatType => {
                if (seatType.id === typeId) {
                    seatType.price = value;
                    isSeatPriceExists = true;
                }
            });
        if (!isSeatPriceExists) {
            this.setState({
                seatPrices: [
                    ...this.state.seatPrices,
                    {
                        id: typeId,
                        price: value
                    }
                ]
            });
            return;
        }
        this.setState({
            seatPrices: seatPrices
        })
    }

    handleServicePriceChange (value, selectedService) {
        let services = [];
        this.state.services.forEach(service => {
            let updatedService = {...service};
            if (service.id === selectedService) {
                updatedService.price = value;
            }
            services.push(updatedService)
        })
        this.setState({
            services: services
        });
    }

    handleServicesChange = (selectedOptions) => {
        let services = [];
        selectedOptions.forEach(option => {
            let existedService = this.state.services.find(service => service.id === option.value);
            if (existedService) {
                services.push(existedService);
            }
            else {
                services.push({
                    id: option.value,
                    price: 0,
                    name: option.label
                });
            }
        })
        this.setState({
            services: services
        });
    }

    sendInfo (event) {
        const {t} = this.props;
        event.preventDefault();
        const {cityId, cinemaId, filmId, hallId, services} = this.state;
        if (services.find(service => service.price === 0)) {
            NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
            return;
        }
        if (cityId && cinemaId && filmId && hallId) {
            const { onSubmit } = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
    }

    moneyFormat(value){
        return value + ' BYN';
    }

    prepareFilterOptions(filterOptions){
        let preparedFilterOptions = {}
        for(var propName in filterOptions) {
            preparedFilterOptions[propName] = [];
            filterOptions[propName]
            .forEach(item => {
                preparedFilterOptions[propName].push({
                    label: item.name,
                    value: {
                        id: item.id,
                        parentId: item.parentId
                    }
                })
            })
        }

        return preparedFilterOptions;
    }

    render(){
        const { filterOptions, filmOptions, seatTypeOptions, additionalServices, t, getFilmFilteredOptionsAsync } = this.props;
        const { selectedOption } = this.state.services;

        let preparedFilterOptions = this.prepareFilterOptions(filterOptions);
        let halls = preparedFilterOptions
            .halls
            .filter(hall => this.state.cityId && this.state.cinemaId &&
                hall.value.parentId === this.state.cinemaId);
        let cinemas = preparedFilterOptions
            .cinemas
            .filter(cinema => cinema.value.parentId === this.state.cityId && this.state.cityId );

        let films = [];
        filmOptions.forEach(film => {
            films.push({
                label: film.name,
                value: {
                    id: film.id,
                }
            })
        })

        let services = [];
        additionalServices
            .forEach(service => {
                services.push({
                    label: service.name,
                    value: service.id,
                })
            })

        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            {t('addSeance')}
                        </legend>
                        <Select
                            name="cityId"
                            className="form-item select"
                            options={preparedFilterOptions.cities}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("cityId", selectedOption.value.id)}
                            placeholder={t('selectCity')}
                        />
                        <Select
                            name="cinemaId"
                            className="form-item select"
                            options={cinemas}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("cinemaId", selectedOption.value.id)}
                            placeholder={t('selectCinema')}
                        />
                        <div className="form-item">
                            <DatePickerCustomized
                                selectedDate={this.state.date}
                                onFilterClick={this.handleInputChange}
                                target="dateTime"
                                showTimeSelect={true}
                            />
                        </div>
                        <AsyncSelect
                            name="filmId"
                            className="form-item select"
                            options={films}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("filmId", selectedOption.value.id)}
                            loadOptions={getFilmFilteredOptionsAsync}
                            placeholder={t('selectFilm')}
                        />
                        <Select
                            name="hallId"
                            className="form-item select"
                            options={halls}
                            isSearchable
                            onChange={(selectedOption) => this.handleInputChange("hallId", selectedOption.value.id)}
                            placeholder={t('selectHall')}
                        />
                        <ul>{
                            seatTypeOptions.map(seatType =>
                                <li className="form-item admin__seatTypePrices">
                                    <label for={seatType.name}>{seatType.name}</label>
                                    <NumericInput
                                        id={seatType.name}
                                        name={seatType.name}
                                        min={1}
                                        placeholder={t('price')}
                                        format={this.moneyFormat}
                                        onChange={(selectedOption) =>
                                            this.handlePriceChange(selectedOption, seatType.id)}
                                        autoComplete="off"
                                    />
                                </li>
                            )
                        }
                        </ul>
                        <Select
                            name="services"
                            className="form-item select"
                            options={services}
                            isMulti
                            isSearchable
                            value={selectedOption}
                            onChange={this.handleServicesChange}
                            placeholder={t('selectAdditionalServices')}
                        />
                        <ul>{
                            this.state.services.map(service =>
                                <li className="form-item admin__services">
                                    <label for={service.name}>{service.name}</label>
                                    <NumericInput
                                        id={service.name}
                                        name={service.name}
                                        min={1}
                                        placeholder={t('servicePrice')}
                                        format={this.moneyFormat}
                                        onChange={(selectedOption) =>
                                            this.handleServicePriceChange(selectedOption, service.id)}
                                        autoComplete="off"
                                    />
                                </li>
                            )
                        }
                        </ul>
                    </fieldset>
                    <input className="form-item forms__button bordered" value={t('add')} type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}
export default withNamespaces()(AddSeanceForm);