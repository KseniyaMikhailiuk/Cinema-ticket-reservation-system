import React, {Component} from 'react'

class AuthorizationForm extends Component {

    state = {
        email: "",
        password: ""
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
        if (this.state.email && this.state.password) {
            const {onSubmit} = this.props;
            onSubmit(this.state);
        }
    }

    render() {
        return(
            <form onSubmit={this.sendInfo}>
                <fieldset className="forms__fieldset">
                    <legend className="form-item forms__legend">
                        Вход в систему
                    </legend>
                    <input className="form-item forms__text-input bordered"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autoComplete="on"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__text-input bordered"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="off"
                        onChange={this.handleInputChange}
                    />
                    <input className="form-item forms__button bordered"
                        type="submit"
                        value="Войти"
                    />
                </fieldset>
            </form>
        )
    }
}

export default AuthorizationForm;