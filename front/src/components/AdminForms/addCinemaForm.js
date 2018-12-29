import React, {Component} from 'react'
import CreatableSelect from 'react-select/lib/Creatable';
import NumericInput from 'react-numeric-input'

class AddCinemaForm extends Component {

    state = {
        city: "",
        cinema: "",
        hallsAmount: 0
    }

    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCinamaChange = this.handleCinamaChange.bind(this);
        this.handleHallsAmountChange = this.handleHallsAmountChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    handleSelectChange = (targetName, selectedOption) => {
        this.setState({
            [targetName]: selectedOption
        });
    }

    handleCityChange = (selectedOption) => {
        this.handleSelectChange("city", selectedOption);

    }

    handleCinamaChange = (selectedOption) => {
        this.handleSelectChange("cinema", selectedOption);
    }

    handleHallsAmountChange(value){
        this.setState({
            hallsAmount: value
        })
    }

    sendInfo (event) {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    render() {
        const {filterOptions} = this.props;
        return(
            <article className="forms admin">
                <form onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить кинотеатр
                        </legend>
                        <CreatableSelect
                            name="services"
                            className="form-item select"
                            options={filterOptions.cities}
                            isSearchable
                            isClearable
                            onChange={this.handleCityChange}
                            placeholder="Введите город"
                            required
                        />
                        <CreatableSelect
                            name="services"
                            className="form-item select"
                            options={filterOptions.cinemas}
                            isSearchable
                            isClearable
                            onChange={this.handleCinamaChange}
                            placeholder="Введите кинотеатр"
                            required
                        />
                        <NumericInput
                            name="price"
                            className="form-item"
                            min={1}
                            max={10}
                            placeholder="Число залов"
                            onChange={this.handleHallsAmountChange}
                            required
                            autoComplete="off"
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
            </article>
        )
    }
}

export default AddCinemaForm;