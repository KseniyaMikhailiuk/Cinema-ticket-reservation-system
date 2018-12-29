import React, {Component} from 'react'
import DatePickerCustomized from '../Common/datePicker'
import NumericInput from 'react-numeric-input'
import Select from 'react-select';

class AddSeanceForm extends Component{
    state = {
        city: "",
        cinema: "",
        hall: 0,
        filmName: "",
        date: new Date(),
        time: "",
        price: 0,
        services: []
    }

    constructor(props) {
        super(props);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCinemaChange = this.handleCinemaChange.bind(this);
        this.handleFilmNameChange = this.handleFilmNameChange.bind(this);
        this.handleHallChange = this.handleHallChange.bind(this);
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

    handleCityChange (selectedOption) {this.handleInputChange("city", selectedOption.label)}
    handleCinemaChange (selectedOption) {this.handleInputChange("cinema", selectedOption.label)}
    handleFilmNameChange (selectedOption) {this.handleInputChange("filmName", selectedOption.label)}
    handleHallChange (selectedOption) {this.handleInputChange("hall", selectedOption.label)}
    handleTimeChange (event) {this.handleInputChange(event.target.name, event.target.value)}

    handlePriceChange(value){
        this.setState({
            price: value
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
        if (!this.state.city || !this.state.cinema || !this.state.filmName || !this.state.hall){
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
            hall.value.indexOf(this.state.city) !== -1 && hall.value.indexOf(this.state.cinema) !== -1)
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
                            onChange={this.handleCityChange}
                            placeholder="Выберите город"
                        />
                        <Select
                            name="cinema"
                            className="form-item select"
                            options={filterOptions.cinemas.filter(cinema => cinema.value === this.state.city || this.state.city)}
                            isSearchable
                            isClearable
                            onChange={this.handleCinemaChange}
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
                            onChange={this.handleFilmNameChange}
                            placeholder="Выберите фильм"
                        />
                        <Select
                            name="hall"
                            className="form-item select"
                            options={halls}
                            isSearchable
                            onChange={this.handleHallChange}
                            placeholder="Выберите зал"
                        />
                        <input
                            name="time"
                            className="form-item"
                            type="time"
                            required
                            onChange={this.handleInputChange}/>
                        <NumericInput
                            name="price"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена билета"
                            format={this.moneyFormat}
                            onChange={this.handlePriceChange}
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