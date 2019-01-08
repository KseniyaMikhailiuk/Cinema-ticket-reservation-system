import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthorizationForm from '../../components/SignInForm/authorizationForm'
import RegistrationForm from '../../components/SignInForm/registrationForm'

import * as userInfo from '../../services/api/userInfoFetch'

import * as actions from '../../store/actions'

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
            if (!response.isExistedUser) {
                toast.warn('Такого пользователя не существует');
                return;
            }
            if (!response.isCorrectPassword) {
                toast.warn('Неправильный пароль');
                return;
            }
            toast.success(
                'Кликни',
                {
                    autoClose: 15000,
                    onClose: () => this.props.history.push('/Schedule')
                }
            );
        })
    }

    onRegistrationSubmit (userData) {
        userInfo.registerUser(userData)
        .then(response => {
            if (response) {
                toast.success('Кликни', {autoClose: 5000});
            }
            else {
                toast.warn('Такого пользователя не существует');
            }
        })
    }

    render() {
        return (
            <section className="forms">
                <AuthorizationForm onSubmit={this.onAuthorizationSubmit}/>
                <RegistrationForm onSubmit={this.onRegistrationSubmit}/>
                <ToastContainer />
            </section>
        )
    }
}

SignIn = withRouter(SignIn);

export default SignIn;