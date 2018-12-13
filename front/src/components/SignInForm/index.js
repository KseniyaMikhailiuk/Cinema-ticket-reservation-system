import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import './signInForm.scss'
import RegistrationForm from './registrationForm'
import AuthorizationForm from './authorizationForm'

const SignInForm = () => {
    return (
        <section className="sign-in-forms">
            <AuthorizationForm />
            <RegistrationForm />
        </section>
    )
}
export default SignInForm;