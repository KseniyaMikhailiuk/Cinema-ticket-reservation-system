import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DatePickerCusomized from '../Common/datePicker'

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
        });
    }

    sendInfo (event) {
        event.preventDefault();
        const {filmName, filmDescription, filmPoster} = this.state;
        if (filmName && filmDescription && filmPoster) {
            const {onSubmit} = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning('Вы заполнили не все поля', 'Упс', 5000);
    }

    render() {
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            Добавить фильм
                        </legend>
                        <input
                            name="filmName"
                            placeholder="Введите название"
                            className="form-item admin__form-item"
                            onChange={this.handleInputChange}
                        />
                        <div className="form-item">
                            <DatePickerCusomized
                                selectedDate={this.state.filmRelease}
                                onFilterClick={(value) => this.handleInputChange({target: {name: "filmRelease", value}})}
                            />
                        </div>
                        <textarea
                            name="filmDescription"
                            placeholder="Введите описание фильма"
                            className="form-item admin__form-item"
                            rows="10"
                            cols="30"
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="filmPoster"
                            className="form-item admin__form-item"
                            placeholder="Выберите постер"
                            type="file"
                            onChange={this.handleInputChange}
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value="Добавить" type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}
export default AddFilmForm;