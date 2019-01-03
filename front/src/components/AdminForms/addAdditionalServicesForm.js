import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class AddAdditionalServicesForm extends Component {
    state = {
        name: "",
        price: 0
    }

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    moneyFormat = (value) => {
        return value + ' BYN'
    }

    handleInputChange (event) {
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
        const {name, price} = this.state;
        if (name === "" || price === 0) {
            NotificationManager.warning('Вы заполнили не все поля', 'Упс', 5000);
            return;
        }
        const {onSubmit} = this.props;
        onSubmit(this.state);
    }

    render(){
        return (
            <article className="forms admin">
                <form onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить дополнительные услуги
                        </legend>
                        <input name="name"
                            placeholder="Введите название"
                            className="form-item admin__form-item"
                            onChange={this.handleInputChange}
                        />
                        <NumericInput
                            name="price"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена услуги"
                            format={this.moneyFormat}
                            onChange={this.handlePriceChange}
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
                <NotificationContainer/>
            </article>
        )
    }
}

export default AddAdditionalServicesForm;