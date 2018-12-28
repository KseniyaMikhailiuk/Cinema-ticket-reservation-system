import React, {Component} from 'react'
import MainFilterPanel from '../Common/mainFilterPanel';
import NumericInput from 'react-numeric-input'

class AddSeanceForm extends Component{
    state = {
        city: "",
        cinema: "",
        hall: 0,
        filmName: "",
        date: new Date(),
        time: "",
        price: 0,
    }

    constructor(props) {
        super(props);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        const {filter} = this.props;
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

    sendInfo (event) {
        event.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state);
    }

    moneyFormat(value){
        return value + ' BYN'
    }

    render(){
        const {filter, filterOptions, changeFilterObjectItem} = this.props
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
                        <input  name="time" className="form-item" type="time" required onChange={this.handleInputChange}/>
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
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
            </article>
        )
    }
}
export default AddSeanceForm;