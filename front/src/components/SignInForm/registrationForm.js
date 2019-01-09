import React, {Component} from 'react'
import Formsy from 'formsy-react'

import ValidatedInput from '../Common/validatedInput'

class RegistrationForm extends Component {
    state = {
        isInFocus: false
    }

    constructor (props) {
        super (props);
        this.sendInfo = this.sendInfo.bind(this);
    }

    sendInfo (userData) {
        const {onSubmit} = this.props;
        onSubmit(userData);
    }

    render() {
        return(
            <Formsy
                onValidSubmit={this.sendInfo}
                onFocus={() => this.setState({isInFocus: true})}
                onBlur={() => this.setState({isInFocus: false})}
            >
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        Регистрация
                    </legend>
                    <ValidatedInput
                        name="name"
                        type="text"
                        validations="isWords"
                        placeholder="Имя"
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="surname"
                        type="text"
                        validationError="Плохо"
                        placeholder="Фамилия"
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="email"
                        type="text"
                        validations="isEmail"
                        validationError="E-mail должен содержать: '@', '.'"
                        placeholder="E-mail"
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        validations="minLength:8"
                        validationError="Не меньше 8 символов"
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="submitPassword"
                        type="password"
                        placeholder="Повторите пароль"
                        isInFocus={this.state.isInFocus}
                        validations="equalsField:password"
                        validationError="Пароль не совпадает"
                        required
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value="Зарегистрироваться"
                    />
                </fieldset>
            </Formsy>
        )
    }
}

export default RegistrationForm;

