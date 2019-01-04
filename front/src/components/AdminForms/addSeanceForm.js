import React, {Component} from 'react'
import DatePickerCustomized from '../Common/datePicker'
import NumericInput from 'react-numeric-input'
import Select from 'react-select';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class AddSeanceForm extends Component{
    state = {
        city: "",
        cinema: "",
        hall: 0,
        filmName: "",
        date: new Date(),
        time: "",
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
        this.state.services.find(
            service => service.name === selectedService
        ).price = value;
    }

    handleServicesChange = (selectedOptions) => {
        if (selectedOptions.length < 1){
            this.setState({
                services: []
            });
        }
        let i = 0;
        while (i < this.state.services.length) {
            if (selectedOptions.find(option => option.value === this.state.services[i].name)){
                i++;
                continue;
            }
            this.state.services.splice(i, 1);
        }

        this.setState({
            services: this.state.services
        });

        for (let option of selectedOptions){
            if (this.state.services.find(service => service.name === option.value)) {
                continue;
            }
            this.setState({
                services: [
                    ...this.state.services,
                    {
                        name: option.value,
                        price: 0
                    }
                ]
            });
        }
    }

    sendInfo (event) {
        event.preventDefault();
        const {city, cinema, filmName, hall, time, price, services} = this.state;
        if (city === "" || cinema === "" ||
            filmName === "" || hall === 0 ||
            time === "" || price.comfort === 0 ||
            price.loveseat === 0 || price.loveseat === 0){
            NotificationManager.warning('Вы заполнили не все поля', 'Упс', 5000);
            return;
        }

        if (services.find(service => service.price === 0)) {
            NotificationManager.warning('Вы заполнили не все поля', 'Упс', 5000);
            return;
        }

        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    moneyFormat(value){
        return value + ' BYN';
    }

    render(){
        const { filterOptions, filmNames, additionalServices } = this.props;
        const { selectedOption } = this.state.services;
        let halls = filterOptions
        	.halls
        	.filter(hall => this.state.city && this.state.cinema &&
	            hall.value.indexOf(this.state.city) !== -1 &&
	            hall.value.indexOf(this.state.cinema) !== -1);
        let cinemas = filterOptions
        	.cinemas
        	.filter(cinema => cinema.value === this.state.city || !this.state.city);
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить сеанс
                        </legend>
                        <Select
                            name="city"
                            className="form-item select"
                            options={filterOptions.cities}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("city", selectedOption.label)}
                            placeholder="Выберите город"
                        />
                        <Select
                            name="cinema"
                            className="form-item select"
                            options={cinemas}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("cinema", selectedOption.label)}
                            placeholder="Выберите кинотеатр"
                        />
                        <div className="form-item">
                            <DatePickerCustomized
                                selectedDate={this.state.date}
                                onFilterClick={this.handleInputChange}
                            />
                        </div>
                        <Select
                            name="filmName"
                            className="form-item select"
                            options={filmNames}
                            isSearchable
                            isClearable
                            onChange={(selectedOption) => this.handleInputChange("filmName", selectedOption.label)}
                            placeholder="Выберите фильм"
                        />
                        <Select
                            name="hall"
                            className="form-item select"
                            options={halls}
                            isSearchable
                            onChange={(selectedOption) => this.handleInputChange("hall", selectedOption.label)}
                            placeholder="Выберите зал"
                        />
                        <input
                            name="time"
                            className="form-item"
                            type="time"
                            onChange={this.handleTimeChange}/>
                        <NumericInput
                            name="standard"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена standard"
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "standard")}
                            autoComplete="off"
                        />
                        <NumericInput
                            name="loveseats"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена loveseats"
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "loveseat")}
                            autoComplete="off"
                        />
                        <NumericInput
                            name="comfort"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена comfort"
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
                            placeholder="Выберите доп услуги"
                        />
                        <ul>{
                            this.state.services.map(service =>
                                <li className="form-item admin__services">
                                    <label for={service.name}>{service.name}</label>
                                    <NumericInput
                                        id={service.name}
                                        name={service.name}
                                        min={1}
                                        max={100}
                                        placeholder="Цена услуги"
                                        format={this.moneyFormat}
                                        onChange={(selectedOption) => this.handleServicePriceChange(selectedOption, service.name)}
                                        autoComplete="off"
                                    />
                                </li>
                            )
                        }
                        </ul>
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}
export default AddSeanceForm;