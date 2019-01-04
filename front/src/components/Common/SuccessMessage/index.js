import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './successMessage.scss'

class SuccessMessage extends Component{
    render(){
        const {path} = this.props;
        return(
            <button className="success-message bordered" onClick={() => {this.props.history.push(path)}}>
                &#10003;
            </button>
        )
    }
}

export default withRouter(SuccessMessage);