import React, { Component, PropTypes } from 'react';
import AlertContainer from 'react-alert';

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

	inputChanged(name, e) {
		e.preventDefault();
		this.props.onChange(name, e.target.value);
	}

	showAlert(){
    this.msg.show('Please fill in all field', {
      time: 4000,
      type: 'success',
      icon: <img src="./info.png" alt="Error"></img>
    });
  }
	onSubmit(e) {
		e.preventDefault();

		if (this.props.firstName ||
				this.props.lastName ||
				this.props.username ||
				this.props.location === ""){
			this.showAlert();

		} else{
			this.props.onSubmit();
			console.log(this.props);
		}
	}
	onValidate(key, value){
		return this.props.validating && value === "" && this.value[key] ? <span className="help-block">This field is required</span> : " ";
	}


	render() {

		return (

			<div className="myForm">
				<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<div className="myForm-title"><h1>SPORTSETTER</h1></div>
				<div className="formContainer">

					<form onSubmit={this.onSubmit.bind(this)}>
						<h4>First Name</h4>
						<input

							type="text"
							placeholder="First Name"
							className="Form-text-input"
							 value={this.props.firstName}
							onChange={this.inputChanged.bind(this, "firstName")}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.firstName = true}/>
						{this.onValidate("firstName", this.props.firstName)}


						<h4>Last Name</h4>
						<input
							type="text"
							placeholder="Last name"
							className="Form-text-input"
							 value={this.props.lastName}
							onChange={this.inputChanged.bind(this, "lastName")}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.lastName = true}/>
						{this.onValidate("lastName", this.props.lastName)}


						<h4>Username</h4>
						<input
							type="text"
							placeholder="Username"
							className="Form-text-input"
							 value={this.props.userName}
							onChange={this.inputChanged.bind(this, "userName")}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.userName = true}/>
						{this.onValidate("userName", this.props.userName)}


						<h4>Location</h4>
						<input
							type="text"
							placeholder="Location"
							className="Form-text-input"
							 value={this.props.location}
							onChange={this.inputChanged.bind(this, "location")}
							onBlur={this.props.handleBlur}
							onFocus={()=> this.value.location = true}/>
						{this.onValidate("location", this.props.location)}

						<a><button className="mybtn" type="submit" value="Submit">Submit</button></a>
					</form>

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
	validating: PropTypes.bool,
};

export default Form;
