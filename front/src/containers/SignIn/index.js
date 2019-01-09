import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {toast} from 'react-toastify';

import AuthorizationForm from '../../components/SignInForm/authorizationForm'
import RegistrationForm from '../../components/SignInForm/registrationForm'

import * as userInfo from '../../services/api/userInfoFetch'
import settings from '../../services/config/settings.json'

import '../../CommonStylesheets/formItems.scss'
import '../../CommonStylesheets/form.scss'

class SignIn extends Component {

    constructor (props) {
        super(props);
        this.onAuthorizationSubmit = this.onAuthorizationSubmit.bind(this);
        this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
    }

    onAuthorizationSubmit (userData) {
        userInfo.authorizeUser(userData)
            .then(response => {
                if (!response.userInfo) {
                    toast.error('Неправильный логин или пароль');
                    return;
                }
                toast.success(
                    `Привет, ${response.userInfo.name}`, {autoClose: 2000}
                );
                this.props.history.goBack();
                const {authorize} = this.props;
                authorize(response.userInfo);
            })
    }

    onRegistrationSubmit (userData) {
        userInfo.registerUser(userData)
            .then(response => {
                if (response) {
                    toast.success('Успех! Теперь пройдие авторизацию', {autoClose: 2000});
                }
                else {
                    toast.warn('Ошибка. Пройдите регистрацию еще раз');
                }
            })
    }

    render() {
        return (
            <section className="forms">
                <AuthorizationForm onSubmit={this.onAuthorizationSubmit} settings={{...settings}}/>
                <RegistrationForm onSubmit={this.onRegistrationSubmit} settings={{...settings}}/>
            </section>
        )
    }
}

SignIn = withRouter(SignIn);

export default SignIn;