import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NumericInput from 'react-numeric-input'
import {withNamespaces} from 'react-i18next'

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

    addHallToCinema (hallPlan, hallName) {
        this.setState({
            halls: [
                ...this.state.halls,
                {
                    name: hallName,
                    plan: hallPlan
                }
            ]
        });
    }

    sendInfo (event) {
        const {t} = this.props;
        event.preventDefault();
        const {city, cinema, hallsAmount, halls} = this.state;
        if (city && cinema && hallsAmount > 0 && hallsAmount === halls.length) {
            const { onSubmit } = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
    }

    render() {
        const {t, seatTypeOptions} = this.props;
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            {t('addCinema')}
                        </legend>
                        <input
                            name="city"
                            className="form-item select"
                            onChange={this.handleInputChange}
                            placeholder={t('enterCityName')}
                        />
                        <input
                            name="cinema"
                            className="form-item select"
                            onChange={this.handleInputChange}
                            placeholder={t('enterCinemaName')}
                        />
                        <NumericInput
                            name="halls"
                            className="form-item"
                            min={1}
                            placeholder={t('hallsNumber')}
                            onChange={this.handleHallsAmountChange}
                            autoComplete="off"
                        />
                        {
                            [...Array(this.state.hallsAmount)].map(() =>
                                <AddHallPlan
                                    onHallSubmit={this.addHallToCinema}
                                    seatTypeOptions={seatTypeOptions}
                                />
                            )
                        }
                    </fieldset>
                    <input
                        className="form-item forms__button bordered"
                        value={t('addCinema')}
                        type="submit">
                    </input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}

export default withNamespaces()(AddCinemaForm);