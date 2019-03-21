import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DatePickerCusomized from '../Common/datePicker';
import {withNamespaces} from 'react-i18next';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';

class AddFilmForm extends Component {
    state = {
        filmName: "",
        filmDuration: moment(),
        filmRelease: new Date(),
        filmDescription: "",
        filmPoster: new FormData(),
        startShowingDate: new Date(),
        finishShowingDate: new Date()
    }

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.handleTimeInputChange = this.handleTimeInputChange.bind(this);
        this.sendInfo = this.sendInfo.bind(this);
    }

    handleInputChange (event) {
        let target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleTimeInputChange(name, value) {
        this.setState({
            [name]: value
        });
    }

    handleFileInput(event) {
        this.setState({
            filmPoster: event.target.files[0]
        })
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
                <form
                    className="forms admin" onSubmit={this.sendInfo}
                    enctype="multipart/form-data"
                >
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
                                onFilterClick={this.handleTimeInputChange}
                                target="filmRelease"
                            />
                        </div>
                        <TimePicker
                            name="filmDuration"
                            className="form-item"
                            defaultValue={moment()}
                            onChange={(value) => this.handleTimeInputChange("filmDuration", value)}
                            showSecond={false}
                        />
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
                            onChange={this.handleFileInput}
                        />
                        <div className="form-item">
                            <DatePickerCusomized
                                selectedDate={this.state.startShowingDate}
                                onFilterClick={this.handleTimeInputChange}
                                target="startShowingDate"
                            />
                        </div>
                        <div className="form-item">
                            <DatePickerCusomized
                                selectedDate={this.state.finishShowingDate}
                                onFilterClick={this.handleTimeInputChange}
                                target="finishShowingDate"
                            />
                        </div>
                    </fieldset>
                    <input className="form-item forms__button bordered" value={t('add')} type="submit"></input>
                </form>
                <NotificationContainer/>
            </>
        )
    }
}
export default withNamespaces()(AddFilmForm);