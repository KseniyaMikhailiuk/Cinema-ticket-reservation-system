import React, {Component} from 'react'
import MainFilterPanel from '../Common/mainFilterPanel';
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
        this.sendInfo = this.sendInfo.bind(this);
        const { filter } = this.props;
        this.state.city = filter.city;
    }

    handleInputChange(event){
        let target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

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
        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    moneyFormat(value){
        return value + ' BYN'
    }

    render(){
        const { filter, filterOptions, changeFilterObjectItem, additionalServices } = this.props
        const { selectedOption } = this.state.services;
        return(
            <article className="forms admin">
                <form onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить сеанс
                        </legend>
                        <MainFilterPanel
                            filter={filter}
                            filterOptions={filterOptions}
                            onFilterClick={changeFilterObjectItem}
                            handleInputChangeAdmin={this.handleInputChange}
                        />
                        <input
                            name="hall"
                            className="form-item"
                            list="hallNumbers"
                            placeholder="Выберите зал"
                            onChange={this.handleInputChange}
                            required/>
                        <datalist id="hallNumbers">
                            {
                                filterOptions
                                .cities
                                .filter(city => city.name === filter.city)
                                .map(city => city.cinemas
                                    .map(cinema => cinema.halls
                                        .map(hall =>
                                            <option value={hall}>{cinema.name}</option>
                                        )
                                    )
                                )
                            }
                        </datalist>
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
                        <ul>
                            {
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