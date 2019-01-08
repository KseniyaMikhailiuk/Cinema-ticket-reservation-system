import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleHallsAmountChange = this.handleHallsAmountChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        this.addHallToCinema = this.addHallToCinema.bind(this);
    }

    handleInputChange = (event) => {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleHallsAmountChange (value){
        if (value < this.state.halls.length){
            let halls = this.state.halls;
            halls.length = halls.length - 1;
            this.setState({
                halls: halls
            });
        }
        this.setState({
            hallsAmount: value
        });
    }

    addHallToCinema (hallPlan) {
        this.setState({
            halls: [
                ...this.state.halls,
                {
                    number: this.state.halls.length + 1,
                    plan: hallPlan
                }
            ]
        });
    }

    sendInfo (event) {
        event.preventDefault();
        const {city, cinema, hallsAmount, halls} = this.state;
        if (city && cinema && hallsAmount > 0 && hallsAmount === halls.length) {
            const { onSubmit } = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning('Вы заполнили не все поля', 'Упс', 5000);
    }

    render() {
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить кинотеатр
                        </legend>
                        <input
                            name="city"
                            className="form-item select"
                            onChange={this.handleInputChange}
                            placeholder="Введите город"
                        />
                        <input
                            name="cinema"
                            className="form-item select"
                            onChange={this.handleInputChange}
                            placeholder="Введите название кинотеатра"
                        />
                        <NumericInput
                            name="halls"
                            className="form-item"
                            min={1}
                            max={10}
                            placeholder="Число залов"
                            onChange={this.handleHallsAmountChange}
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
                <NotificationContainer/>
            </>
        )
    }
}

export default AddCinemaForm;