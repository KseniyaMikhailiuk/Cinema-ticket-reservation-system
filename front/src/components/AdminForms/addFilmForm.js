import React, {Component} from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DatePickerCusomized from '../Common/datePicker'
import {withNamespaces} from 'react-i18next'

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
        const {t} = this.props;
        event.preventDefault();
        const {filmName, filmDescription, filmPoster} = this.state;
        if (filmName && filmDescription && filmPoster) {
            const {onSubmit} = this.props;
            onSubmit(this.state);
            return;
        }
        NotificationManager.warning(t('notAllFieldsAreFilled'), t('Ops'), 5000);
    }

    render() {
        const {t} = this.props;
        return(
            <>
                <form className="forms admin" onSubmit={this.sendInfo}>
                    <fieldset>
                        <legend className="form-item forms__legend">
                            {t('addFilm')}
                        </legend>
                        <input
                            name="filmName"
                            placeholder={t('enterFilmName')}
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
                            placeholder={t('enterFilmDescription')}
                            className="form-item admin__form-item"
                            rows="10"
                            cols="30"
                            onChange={this.handleInputChange}
                        />
                        <input
                            name="filmPoster"
                            className="form-item admin__form-item"
                            placeholder={t('selectPoster')}
                            type="file"
                            onChange={this.handleInputChange}
                        />
                    </fieldset>
                    <input className="form-item forms__button bordered" value={t('add')} type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}
export default withNamespaces()(AddFilmForm);