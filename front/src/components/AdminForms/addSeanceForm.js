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
        city: "",
        cinema: "",
        hall: 0,
        filmName: "",
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
        this.state.city = filter.city;
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
        const {city, cinema, filmName, hall, time, price, services} = this.state;
        if (services.find(service => service.price === 0)) {
            NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
            return;
        }
        if (city && cinema && filmName && hall && time &&
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

    prepareFilterOptions(list){
        list
            .forEach(item => {
                item = {
                    label: item.name,
                    value: {
                        id: item.id,
                        parentId: item.parentId
                    }
                }
            })
        console.log(list)
        return list;
    }

    render(){
        const { filterOptions, filmNames, additionalServices, t } = this.props;
        const { selectedOption } = this.state.services
        for(var propName in filterOptions) {
            filterOptions[propName] = this.prepareFilterOptions(filterOptions[propName]);
        }

        // let halls = filterOptions
        //     .halls
        //     .filter(hall => this.state.city && this.state.cinema &&
        //         hall.value.indexOf(this.state.city) !== -1 &&
        //         hall.value.indexOf(this.state.cinema) !== -1);
        // let cinemas = filterOptions
        //     .cinemas
        //     .filter(cinema => cinema.value === this.state.city || !this.state.city);
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            {t('addSeance')}
                        </legend>
                        <Select
                            name="city"
                            className="form-item select"
                            options={filterOptions.cities}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("city", selectedOption.label)}
                            placeholder={t('selectCity')}
                        />
                        <Select
                            name="cinema"
                            className="form-item select"
                            options={filterOptions.cinemas}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("cinema", selectedOption.label)}
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
                            name="filmName"
                            className="form-item select"
                            options={filmNames}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("filmName", selectedOption.label)}
                            placeholder={t('selectFilm')}
                        />
                        <Select
                            name="hall"
                            className="form-item select"
                            options={filterOptions.halls}
                            isSearchable
                            onChange={(selectedOption) => this.handleInputChange("hall", selectedOption.label)}
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