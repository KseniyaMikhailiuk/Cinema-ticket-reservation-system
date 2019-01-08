import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import {connect} from 'react-redux';

import AuthorizationForm from '../../components/SignInForm/authorizationForm'
import RegistrationForm from '../../components/SignInForm/registrationForm'

import * as userInfo from '../../services/api/userInfoFetch'

import {authorize} from '../../store/actions'

import 'react-toastify/dist/ReactToastify.css';

import '../../CommonStylesheets/formItems.scss'
import '../../CommonStylesheets/form.scss'

class SignIn extends Component {

    state = {
        isDisabled: false
    }

    constructor (props) {
        super(props);
        this.onAuthorizationSubmit = this.onAuthorizationSubmit.bind(this);
        this.onRegistrationSubmit = this.onRegistrationSubmit.bind(this);
    }

    onAuthorizationSubmit (userData) {
        userInfo.authorizeUser(userData)
            .then(response => {
                if (!response.isExistedUser) {
                    toast.error('Такого пользователя не существует');
                    return;
                }
                if (!response.isCorrectPassword) {
                    toast.error('Неправильный пароль');
                    return;
                }
                toast.success(
                    'Успех! Кликни, чтобы перейти к расписанию (или мы перейдем за Вас)',
                    {
                        autoClose: 15000,
                        onClose: () => this.props.history.push('/Schedule')
                    }
                );
                this.setState({ isDisabled: true});
                const {dispatch} = this.props;
                authorize(userData, dispatch);
            })
    }

    onRegistrationSubmit (userData) {
        userInfo.registerUser(userData)
            .then(response => {
                if (response) {
                    toast.success('Успех! Теперь пройдие авторизацию', {autoClose: 5000});
                }
                else {
                    toast.warn('Такого пользователя не существует');
                }
            })
    }

    render() {
        return (
            <section className="forms">
                <AuthorizationForm onSubmit={this.onAuthorizationSubmit} isDisabled={this.state.isDisabled}/>
                <RegistrationForm onSubmit={this.onRegistrationSubmit} isDisabled={this.state.isDisabled}/>
                <ToastContainer />
            </section>
        )
    }
}

SignIn = withRouter(SignIn);

export default SignIn;