import React, {Component} from 'react'
import Formsy from 'formsy-react';

import ValidatedInput from '../Common/validatedInput'

import settings from '../../services/config/settings.json'

class AuthorizationForm extends Component {

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
                        Вход в систему
                    </legend>
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
                        validationError="Не меньше 8 символов"
                        validations={`minLength:${settings['password_min_length']}`}
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value="Войти"
                    />
                </fieldset>
            </Formsy>
        )
    }
}

export default AuthorizationForm;