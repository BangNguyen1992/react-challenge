import React, { Component } from 'react';
import Form from './Form';

class FormInput extends Component {

	render() {
		return (
					<input type="text" className="Form-text-input" required/>
		);
	}
};

FormInput.propTypes = {
	handleBlur: PropTypes.func,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	validating: PropTypes.bool,
};
export default FormInput;

<label>
	<span></span>
	<input type="text" className="Form-text-input" required onBlur={this.props.handleBlur}

		value={this.props.firstName}
		onChange={this.inputChanged.bind(this, "firstName")}
		onFocus={()=> this.value.firstName = true}
		/>
</label>
