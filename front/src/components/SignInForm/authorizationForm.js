import React, {Component} from 'react'
import Formsy from 'formsy-react';

import ValidatedInput from '../Common/validatedInput'

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
        const {settings} = this.props;
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
                        validationError="E-mail должен быть валидным"
                        placeholder="E-mail"
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        validations={`minLength:${settings.password_min_length}`}
                        validationError={`Не меньше ${settings.password_min_length} символов`}
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