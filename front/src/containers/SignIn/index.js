import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {toast} from 'react-toastify';
import {withNamespaces} from 'react-i18next'

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
        const {t} = this.props;
        userInfo.authorizeUser(userData)
            .then(response => {
                if (!response) {
                    toast.error(t('incorectLoginOrPasswordMessage'));
                    return;
                }
                toast.success(
                    `${t('hello')}, ${response.name}`, {autoClose: 2000}
                );
                this.props.history.goBack();
                const {authorize} = this.props;
                authorize(response);
            })
    }

    onRegistrationSubmit (userData) {
        const {t} = this.props;
        userInfo.registerUser(userData)
            .then(response => {
                if (response) {
                    toast.success(
                        `${t('hello')}, ${response.name}`, {autoClose: 2000}
                    );
                    this.props.history.goBack();
                    const {authorize} = this.props;
                    authorize(response);
                }
                else {
                    toast.warn(t('emailExistsMessage'));
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

export default withNamespaces()(SignIn);