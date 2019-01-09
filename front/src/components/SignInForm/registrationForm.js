import React, {Component} from 'react'

class RegistrationForm extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        password: "",
        submitPassword: "",
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
            name: this.state.name.length === 0,
            surname: this.state.surname.length === 0,
            email: this.state.email.length === 0,
            password: this.state.password.length < 7,
            submitPassword: this.state.password !== this.state.submitPassword || this.state.password.length < 7,
        };
    }

    sendInfo (event) {
        event.preventDefault();
        if (this.state.name && this.state.surname &&
            this.state.email && this.state.password &&
            this.state.password === this.state.submitPassword) {
            const {onSubmit} = this.props;
            let userData = {...this.state};
            delete userData.submitPassword;
            delete userData.onFocus;
            onSubmit(userData);
        }
    }

    render() {
        let errors = {};
        if (this.state.isInFocus) {
            errors = this.validateInputs();
        }
        return(
            <form
                onSubmit={this.sendInfo}
                onFocus={() => this.setState({isInFocus: true})}
                onBlur={() => this.setState({isInFocus: false})}
            >
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        Регистрация
                    </legend>
                    <input className={`form-item forms__text-input bordered ${errors.name ? "error" : ""}`}
                        name="name"
                        type="text"
                        placeholder="Имя"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className={`form-item forms__text-input bordered ${errors.surname ? "error" : ""}`}
                        name="surname"
                        type="text"
                        placeholder="Фамилия"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className={`form-item forms__text-input bordered ${errors.email ? "error" : ""}`}
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className={`form-item forms__text-input bordered ${errors.password ? "error" : ""}`}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className={`form-item forms__text-input bordered ${errors.submitPassword ? "error" : ""}`}
                        name="submitPassword"
                        type="password"
                        placeholder="Повторите пароль"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value="Зарегистрироваться"
                    />
                </fieldset>
            </form>
        )
    }
}

export default RegistrationForm;

