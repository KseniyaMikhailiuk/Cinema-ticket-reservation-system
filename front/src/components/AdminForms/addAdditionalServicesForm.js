import React, {Component} from 'react'
import NumericInput from 'react-numeric-input'

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
                            onChange={this.handleInputChange}/>
                        <NumericInput
                            name="price"
                            className="form-item"
                            min={1}
                            max={100}
                            placeholder="Цена услуги"
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

export default AddAdditionalServicesForm;