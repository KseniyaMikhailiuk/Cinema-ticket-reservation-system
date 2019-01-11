import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import i18n from '../../../i18n';

import './footer.scss'

class Footer extends Component{

    state = {
        language: i18n.language
    }

    constructor (props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (selectedOption) {
        i18n.changeLanguage(selectedOption.value);
        this.setState({
            language: i18n.language
        })
    }

    render () {
        let languages = [{value: "en", label: "en"}, {value: "ru", label: "ru"}];
        return (
            <div className="footer">
                <Select
                    className="footer__select"
                    options={languages}
                    value={{value: this.state.language, label: this.state.language}}
                    onChange={this.handleSelectChange}
                    menuPlacement = "top"
                />
            </div>
        )
    }
}

export default Footer;