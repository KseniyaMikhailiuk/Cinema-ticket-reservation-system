import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NumericInput from 'react-numeric-input'
import {withNamespaces} from 'react-i18next'

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
        return value + ' BYN';
    }

    handleInputChange (event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handlePriceChange(value){
        this.setState({
            price: value
        });
    }

    sendInfo (event) {
        const {t} = this.props;
        event.preventDefault();
        const {name, price} = this.state;
        if (name && price) {
            const {onSubmit} = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
    }

    render(){
        const {t} = this.props;
        return (
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            {t('addAdditionalServices')}
                        </legend>
                        <input name="name"
                            placeholder={t('enterName')}
                            className="form-item admin__form-item"
                            onChange={this.handleInputChange}
                        />
                        <NumericInput
                            name="price"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder={t('servicePrice')}
                            format={this.moneyFormat}
                            onChange={this.handlePriceChange}
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value={t('add')} type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}

export default withNamespaces()(AddAdditionalServicesForm);