import React, { Component, PropTypes} from 'react';
import './Form.css';

class FormInput extends Component {
		
	inputChanged(name, e){
//		e.preventDefault();
		this.props.onChange(name, e.target.value);
	}
	
	render() {
		return (
			
			<div className="FormInput">
				<h4>{this.props.label}</h4>
				
				<input 
					name={this.props.name}
					type="text"
					placeholder={this.props.label}
					className="Form-text-input"
					value={this.props.value}
					onChange={this.inputChanged.bind(this, this.props.name)}
					onBlur={this.props.onBlur}
					onFocus={this.props.onFocus}
					/>
			</div>
			 
		);
	}
}

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	
};
		

export default FormInput;





