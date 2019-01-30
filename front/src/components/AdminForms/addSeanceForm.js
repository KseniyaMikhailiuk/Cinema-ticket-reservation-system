import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DatePickerCustomized from '../Common/datePicker'
import NumericInput from 'react-numeric-input'
import Select from 'react-select';
import {withNamespaces} from 'react-i18next'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class AddSeanceForm extends Component{
    state = {
        cityId: 0,
        cinemaId: 0,
        hallId: 0,
        filmNameId: 0,
        date: new Date(),
        price: {
            standard: 0,
            loveseat: 0,
            comfort: 0
        },
        services: []
    }

    constructor(props) {
        super(props);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        const { filter } = this.props;
        this.state.cityId = filter.cityId;
    }

    handleInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleTimeChange (event) {
        this.handleInputChange(event.target.name, event.target.value);
    }

    handlePriceChange(value, type) {
        this.setState({
            price: {
                ...this.state.price,
                [type]: value
            }
        })
    }

    handleServicePriceChange (value, selectedService) {
        let services = [];
        this.state.services.forEach(service => {
            let updatedService = {...service};
            if (service.name === selectedService) {
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
            let existedService = this.state.services.find(service => service.name === option.value);
            if (existedService) {
                services.push(existedService);
            }
            else {
                services.push({
                    name: option.value,
                    price: 0
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
        const {cityId, cinemaId, filmNameId, hallId, time, price, services} = this.state;
        if (services.find(service => service.price === 0)) {
            NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
            return;
        }
        if (cityId && cinemaId && filmNameId && hallId && time &&
            price.comfort && price.loveseat && price.loveseat) {
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
        const { filterOptions, filmOptions, additionalServices, t } = this.props;
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
                                target="date"
                                showTimeSelect={true}
                            />
                        </div>
                        <Select
                            name="filmNameId"
                            className="form-item select"
                            options={films}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("filmNameId", selectedOption.value.id)}
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
                        <NumericInput
                            name="standard"
                            className="form-item"
                            min={0}
                            placeholder={t('priceStandard')}
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "standard")}
                            autoComplete="off"
                        />
                        <NumericInput
                            name="loveseats"
                            className="form-item"
                            min={0}
                            placeholder={t('priceLoveseats')}
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "loveseat")}
                            autoComplete="off"
                        />
                        <NumericInput
                            name="comfort"
                            className="form-item"
                            min={0}
                            placeholder={t('priceComfort')}
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "comfort")}
                            autoComplete="off"
                        />
                        <Select
                            name="services"
                            className="form-item select"
                            options={additionalServices}
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
                                            this.handleServicePriceChange(selectedOption, service.name)}
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