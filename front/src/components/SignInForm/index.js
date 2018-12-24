import React from 'react'
import '../../CommonStylesheets/formItems.scss'
import '../../CommonStylesheets/form.scss'
import RegistrationForm from './registrationForm'
import AuthorizationForm from './authorizationForm'

const SignInForm = () => {
    return (
        <section className="forms">
            <AuthorizationForm />
            <RegistrationForm />
        </section>
    )
}
export default SignInForm;