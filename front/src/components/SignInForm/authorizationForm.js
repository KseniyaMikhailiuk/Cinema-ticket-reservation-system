import React from 'react'

const AuthorizationForm = () => {
    return(
        <form>
            <fieldset className="forms__fieldset">
                <legend className="form-item forms__legend">
                    Вход в систему
                </legend>
                <input className="form-item forms__text-input bordered"
                    type="email"
                    placeholder=" E-mail"
                    autoComplete="on"
                    required
                />
                <input className="form-item forms__text-input bordered"
                    type="password"
                    placeholder=" Пароль"
                    autoComplete="off"
                    required
                />
                <input className="form-item forms__button bordered"
                    type="submit"
                    value="Войти"
                />
            </fieldset>
        </form>
    )
}

export default AuthorizationForm;