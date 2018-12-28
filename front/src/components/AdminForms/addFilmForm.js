import React, {Component} from 'react'
import '../../CommonStylesheets/form.scss'
import './addFilmForm.scss'

class AddFilmForm extends Component {
    state = {
        filmName: "",
        filmRelease: new Date(),
        filmDescription: "",
        filmPoster: ""
    }

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    handleInputChange (event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    sendInfo (event) {
        event.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state);
    }

    render() {
        return(
            <article className="forms admin">
                <form onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить фильм
                        </legend>
                        <input
                            name="filmName"
                            placeholder="Введите название"
                            className="form-item admin__form-item"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            name="filmRelease"
                            className="form-item admin__form-item"
                            type="date"
                            onChange={this.handleInputChange}
                            required
                        />
                        <textarea
                            name="filmDescription"
                            placeholder="Введите описание фильма"
                            className="form-item admin__form-item"
                            rows="10"
                            cols="30"
                            onChange={this.handleInputChange}
                            required
                        />
                        <input
                            name="filmPoster"
                            className="form-item admin__form-item"
                            placeholder="Выберите постер"
                            type="file"
                            onChange={this.handleInputChange}
                            required
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
            </article>
        )
    }
}
export default AddFilmForm;