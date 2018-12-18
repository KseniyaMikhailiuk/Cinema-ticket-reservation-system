import React from 'react'

const RegistrationForm = () => {
    return(
        <form>
            <fieldset className="sign-in-forms__fieldset">
                <legend className="form-item sign-in-forms__legend">
                    Регистрация
                </legend>
                <input className="form-item sign-in-forms__text-input bordered" 
                    type="text"
                    placeholder=" Имя"
                    autoComplete="on"
                    required
                />       
                <input className="form-item sign-in-forms__text-input bordered" 
                    type="text"
                    placeholder=" Фамилия"
                    autoComplete="on"
                    required
                />    
                <input className="form-item sign-in-forms__text-input bordered" 
                    type="email"
                    placeholder=" E-mail"
                    autoComplete="on"
                    required
                />    
                <input className="form-item sign-in-forms__text-input bordered" 
                    type="password"
                    placeholder=" Пароль"
                    autoComplete="off"
                    required
                />    
                <input className="form-item sign-in-forms__text-input bordered" 
                    type="password"
                    placeholder=" Повторите пароль"
                    autoComplete="off"
                    required
                />          
                <input className="form-item sign-in-forms__button bordered" 
                    type="submit" 
                    value="Зарегистрироваться"
                />                    
            </fieldset>
        </form>
    )
} 

export default RegistrationForm;