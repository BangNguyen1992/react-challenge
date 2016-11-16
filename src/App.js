import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import Form from './Form';
import Profile from './Profile';
import './App.css';
class App extends Component {
	constructor() {
		super();
		this.state = {
			editing: true,
			firstName: "",
			lastName: "",
			userName: "",
			location: "",
			validating: false,
		};
	}
	onFieldChange(field, value) {
		this.setState({ [field]: value });
	}
	onEditingComplete() {
		this.setState({ editing: false });
	}
	onReEdit(){
		this.setState({ editing: true });
	}
	handleBlur(){
		this.setState({ validating: true });
	}
	render() {
		let component;
		if (this.state.editing) {
			component =
				<Form key="one"
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					userName={this.state.userName}
					location={this.state.location}
					validating={this.state.validating}
					handleBlur={this.handleBlur.bind(this)}
					onChange={this.onFieldChange.bind(this)}
					onSubmit={this.onEditingComplete.bind(this)} />;
		} else {
			component =
				<Profile key="three"
					firstName={this.state.firstName}
					lastName={this.state.lastName}
					userName={this.state.userName}
					location={this.state.location}
					onReEdit={this.onReEdit.bind(this)} />;
		}
		return (
			<div className="App">
				<ReactCSSTransitionReplace transitionName="cross-fade"
                               transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
					{component}
				</ReactCSSTransitionReplace>
			</div>
		);
	}
}
export default App;
