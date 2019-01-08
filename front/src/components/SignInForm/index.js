import React from 'react'

import RegistrationForm from './registrationForm'
import AuthorizationForm from './authorizationForm'

import '../../CommonStylesheets/formItems.scss'
import '../../CommonStylesheets/form.scss'

const SignInForm = () => {
    return (
        <section className="forms">
            <AuthorizationForm />
            <RegistrationForm />
        </section>
    )
}
export default SignInForm;