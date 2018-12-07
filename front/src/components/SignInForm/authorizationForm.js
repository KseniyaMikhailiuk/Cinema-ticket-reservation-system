import React from 'react'

const AuthorizationForm = () => {
    return(
        <form>
            <fieldset className="sign-in-forms__fieldset">
                <legend className="form-item sign-in-forms__legend">Вход в систему</legend>
                <input className="form-item sign-in-forms__text-input bordered" type="email" placeholder=" E-mail" autoComplete="on" required/>
                <input className="form-item sign-in-forms__text-input bordered" type="password" placeholder=" Пароль" autoComplete="off" required/>
                <section className="form-item sign-in-forms__checkbox-label-container">
                    <input type="checkbox" name="rememberMe" value="rememberMe" id="rememberMe"></input>
                    <label htmlFor="rememberMe">Запомнить меня?</label>
                </section>
                <input className="form-item sign-in-forms__button bordered" type="submit" value="Войти"/>                    
            </fieldset>
        </form>
    )
}

export default AuthorizationForm;