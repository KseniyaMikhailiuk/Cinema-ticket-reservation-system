import React, {Component} from 'react'
import DatePickerCustomized from '../Common/datePicker'
import NumericInput from 'react-numeric-input'
import Select from 'react-select';
import { stat } from 'fs';

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

    handleInputChange(name, value){
        this.setState({
            [name]: value
        })
    }

    handleTimeChange (event) {this.handleInputChange(event.target.name, event.target.value)}

    handlePriceChange(value, type){
        this.setState({
            price: {
                ...this.state.price,
                [type]: value
            }
        })
    }

    handleServicePriceChange (value, selectedService){
        this.state.services.find(service => service.name === selectedService).price = value;
    }

    handleServicesChange = (selectedOptions) => {
        if (selectedOptions.length < 1){
            this.setState({
                services: []
            });
        }
        for (let service of selectedOptions){
            this.setState({
                services: [
                    ...this.state.services,
                    {
                        name: service.value
                    }
                ]
            });
        }
    }

    sendInfo (event) {
        event.preventDefault();
        if (this.state.city === "" || this.state.cinema === "" || this.state.filmName === "" || this.state.hall === 0){
            alert('Вы заполнили не все поля')
            return;
        }
        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    moneyFormat(value){
        return value + ' BYN'
    }

    render(){
        const { filterOptions, filmNames, additionalServices } = this.props
        const { selectedOption } = this.state.services;
        let halls = filterOptions.halls.filter(hall =>
            this.state.city && this.state.cinema &&
            hall.value.indexOf(this.state.city) !== -1 &&
            hall.value.indexOf(this.state.cinema) !== -1)
        return(
            <article className="forms admin">
                <form onSubmit={this.sendInfo}>
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
                            options={filterOptions.cinemas.filter(cinema => cinema.value === this.state.city || this.state.city)}
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
                            required
                            onChange={this.handleTimeChange}/>
                        <NumericInput
                            name="standard"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена standard"
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "standard")}
                            required
                            autoComplete="off"
                        />
                        <NumericInput
                            name="loveseats"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена loveseats"
                            format={this.moneyFormat}
                            onChange={(value) => this.handlePriceChange(value, "loveseats")}
                            required
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
                            required
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
                                    <label >{service.name}</label>
                                    <NumericInput
                                        name={service.name}
                                        min={1}
                                        max={100}
                                        placeholder="Цена услуги"
                                        format={this.moneyFormat}
                                        onChange={(selectedOption) => this.handleServicePriceChange(selectedOption, service.name)}
                                        required
                                        autoComplete="off"
                                    />
                                </li>
                            )
                        }
                        </ul>
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
            </article>
        )
    }
}
export default AddSeanceForm;