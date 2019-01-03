import React, {Component} from 'react'
import CreatableSelect from 'react-select/lib/Creatable';
import NumericInput from 'react-numeric-input'
import AddHallPlan from './addHallPlan';

class AddCinemaForm extends Component {

    state = {
        city: "",
        cinema: "",
        hallsAmount: 0,
        halls: []
    }

    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCinamaChange = this.handleCinamaChange.bind(this);
        this.handleHallsAmountChange = this.handleHallsAmountChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        this.addHallToCinema = this.addHallToCinema.bind(this);
    }

    handleSelectChange = (targetName, selectedOption) => {
        this.setState({
            [targetName]: selectedOption
        });
    }

    handleCityChange = (selectedOption) => {
        this.handleSelectChange("city", selectedOption.label);

    }

    handleCinamaChange = (selectedOption) => {
        this.handleSelectChange("cinema", selectedOption.label);
    }

    handleHallsAmountChange (value){
        if (value < this.state.halls.length){
            let halls = this.state.halls;
            halls.length = halls.length - 1;
            this.setState({
                halls: halls
            })
        }
        this.setState({
            hallsAmount: value
        })
    }

    addHallToCinema (hallPlan) {
        this.setState({
            halls: [
                ...this.state.halls,
                {
                    number: this.state.halls.length + 1,
                    hallPlan: hallPlan
                }
            ]
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
                        {
                            [...Array(this.state.hallsAmount)].map(() =>
                                <AddHallPlan
                                    onHallSubmit={this.addHallToCinema}
                                />
                            )
                        }
                    </fieldset>
                    <input
                        className="form-item forms__button bordered"
                        value="Добавить кинотеатр"
                        type="submit">
                    </input>
                </form>
            </article>
        )
    }
}

export default AddCinemaForm;