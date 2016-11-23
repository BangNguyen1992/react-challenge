import React, { Component, PropTypes } from 'react';
import AlertContainer from 'react-alert';
import FormInput from './FormInput'

import './Form.css';
import './App.css';

class Form extends Component {
	constructor(props) {
		super(props);

		this.value = {
			"firstName": false,
			"lastName": false,
			"userName": false,
			"location": false,
		};
		this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
	}
	
	showAlert(){
    this.msg.show('Please fill in all field', {
      time: 4000,
      type: 'success',
      icon: <img src="./info.png" alt="Error"></img>
    });
  }
	
	handleFocus(i){
		return this.value[i] = true;
	}

	onSubmit(e) {
		e.preventDefault();
		if(!this.props.firstName.toString() ||
				!this.props.lastName ||
				!this.props.userName ||
				!this.props.location ){
			this.showAlert();
		} else {
			this.props.onSubmit();
		}
		
	}

	onValidate(key, value){
		return this.props.validating && this.value[key] && value === ""  ? <span className="help-block">This field is required</span> : " ";
	}
	
	inputChanged(name, e) {
//		e.preventDefault();
		this.props.onChange(name, e);
	}

	render() {
				
		return (
			<div className="myForm">
				<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<div className="myForm-title"><h1>SPORTSETTER</h1></div>
				<div className="formContainer">
					
					<form onSubmit={this.props.onSubmit.bind(this)}>
						
						<FormInput
							name="firstName"
							label="First Name"
							value={this.props.firstName}
							onChange={this.inputChanged.bind(this)}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.firstName = true}
							/>
						{this.onValidate("firstName", this.props.firstName)}
						
						<FormInput
							name="lastName"
							label="Last Name"
							value={this.props.lastName}
							onChange={this.inputChanged.bind(this)}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.lastName = true}
							/>
						{this.onValidate("lastName", this.props.lastName)}
						
						<FormInput
							name="userName"
							label="Username"
							value={this.props.userName}
							onChange={this.inputChanged.bind(this)}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.userName = true}
							/>
						{this.onValidate("userName", this.props.userName)}
						
						<FormInput
							name="location"
							label="Location"
							value={this.props.location}
							onChange={this.inputChanged.bind(this)}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.location = true}
							/>
						{this.onValidate("location", this.props.location)}
						
					</form>
					<button className="mybtn" type="submit" value="Submit" onClick={this.onSubmit.bind(this)}>Submit</button>
			</div>
			</div>
		);
	}

}
Form.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	handleBlur: PropTypes.func,
	getName: PropTypes.func,
	validating: PropTypes.bool,
};

export default Form;
