import React, {Component} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'

import * as actions from '../../../store/actions'
import {getLanguage} from '../../../store/stateGetters'

import './footer.scss'

class Footer extends Component{

    constructor (props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (selectedOption) {
        const {changeLanguage} = this.props;
        changeLanguage(selectedOption.value);
    }

    render () {
        const {language} = this.props;
        console.log(language)
        let languages = [{value: "en", label: "en"}, {value: "ru", label: "ru"}];
        return (
            <div className="footer">
                <Select
                    className="footer__select"
                    options={languages}
                    value={{value: language, label: language}}
                    onChange={this.handleSelectChange}
                    menuPlacement = "top"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        language: getLanguage(state)
    }
}

Footer = connect(
    mapStateToProps,
    actions
)(Footer)

export default Footer;