import React from 'react'
import formElementsContent from './authorizationDB'

const AuthorizationForm = () => {
    return(
        <form>
            <fieldset className="sign-in-forms__fieldset">
                <legend className="form-item sign-in-forms__legend">
                    {formElementsContent.legend.text}
                </legend>
                {
                    formElementsContent
                        .inputFields
                        .map(field =>
                            <input className="form-item sign-in-forms__text-input bordered" 
                                type={field.type} 
                                placeholder={field.placeholder} 
                                autoComplete={field.autoComplete} 
                                required
                            />
                        )
                }                
                <input className="form-item sign-in-forms__button bordered" 
                    type="submit" 
                    value={formElementsContent.inputSubmit.text}
                />                    
            </fieldset>
        </form>
    )
}

export default AuthorizationForm;