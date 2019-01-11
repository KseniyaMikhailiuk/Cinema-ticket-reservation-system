import React, {Component} from 'react'
import Formsy from 'formsy-react'
import {withNamespaces} from 'react-i18next'

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
        const {settings, t} = this.props;
        return(
            <Formsy
                onValidSubmit={this.sendInfo}
                onFocus={() => this.setState({isInFocus: true})}
                onBlur={() => this.setState({isInFocus: false})}
            >
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        {t('signUpTitle')}
                    </legend>
                    <ValidatedInput
                        name="name"
                        type="text"
                        placeholder={t('name')}
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="surname"
                        type="text"
                        placeholder={t('surname')}
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="email"
                        type="text"
                        validations="isEmail"
                        validationError={t('E-mail должен быть валидным')}
                        placeholder={t('email')}
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="password"
                        type="password"
                        placeholder={t('password')}
                        validations={`minLength:${settings.password_min_length}`}
                        validationError={`${t('notLess')} ${settings.password_min_length} ${t('symbols')}`}
                        isInFocus={this.state.isInFocus}
                        required
                    />
                    <ValidatedInput
                        name="submitPassword"
                        type="password"
                        placeholder={t('submitPassword')}
                        isInFocus={this.state.isInFocus}
                        validations="equalsField:password"
                        validationError={t('submitPasswordErrorMessage')}
                        required
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value={t('signUp')}
                    />
                </fieldset>
            </Formsy>
        )
    }
}

export default withNamespaces()(RegistrationForm);

