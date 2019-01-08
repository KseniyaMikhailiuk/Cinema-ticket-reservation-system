import React, {Component} from 'react'

class RegistrationForm extends Component {
    state = {
        name: "",
        surname: "",
        email: "",
        password: "",
        submitPassword: ""
    }

    constructor (props) {
        super (props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    handleInputChange (event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    sendInfo (event) {
        event.preventDefault();
        if (this.state.password !== this.state.submitPassword) {
        }
        if (this.state.name && this.state.surname &&
            this.state.email && this.state.password) {
            const {onSubmit} = this.props;
            let userData = {...this.state};
            delete userData.submitPassword;
            onSubmit(userData);
        }
    }

    render() {
        return(
            <form onSubmit={this.sendInfo}>
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        Регистрация
                    </legend>
                    <input className="form-item forms__text-input bordered"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__text-input bordered"
                        name="surname"
                        type="text"
                        placeholder="Фамилия"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__text-input bordered"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__text-input bordered"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__text-input bordered"
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

