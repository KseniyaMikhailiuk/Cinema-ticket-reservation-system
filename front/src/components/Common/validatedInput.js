import React, {Component} from 'react';
import { withFormsy } from 'formsy-react';

class ValidatedInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const {placeholder, type, isInFocus} = this.props;
    const errorMessage = this.props.getErrorMessage();
    let isErrorStyled = (errorMessage || !this.props.getValue()) && isInFocus;
    return (
      <div>
        <input
            className={`form-item forms__text-input bordered ${isErrorStyled ? "error" : ""}`}
            onChange={this.changeValue}
            type={type}
            placeholder={placeholder}
            value={this.props.getValue() || ''}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(ValidatedInput);