import React, {Component} from 'react'

class AuthorizationForm extends Component {

    state = {
        email: "",
        password: "",
        isInFocus: false
    }

    constructor (props) {
        super (props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
    }

    handleInputChange (event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    validateInputs() {
        return {
            email: this.state.email.length === 0,
            password: this.state.password.length < 7,
        };
    }

    sendInfo (event) {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            let userData = {...this.state};
            delete userData.isInFocus;
            const {onSubmit} = this.props;
            onSubmit(this.state);
        }
    }

    render() {
        let errors = {};
        if (this.state.isInFocus) {
            errors = this.validateInputs();
        }
        const {isDisabled} = this.props;
        return(
            <form
                onSubmit={this.sendInfo}
                onFocus={() => this.setState({isInFocus: true})}
                onBlur={() => this.setState({isInFocus: false})}
            >
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        Вход в систему
                    </legend>
                    <input className={`form-item forms__text-input bordered ${errors.email ? "error" : ""}`}
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autoComplete="on"
                        onChange={this.handleInputChange}
                        disabled={isDisabled}
                    />
                    <input className={`form-item forms__text-input bordered ${errors.password ? "error" : ""}`}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                        disabled={isDisabled}
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value="Войти"
                        disabled={isDisabled}
                    />
                </fieldset>
            </form>
        )
    }
}

export default AuthorizationForm;