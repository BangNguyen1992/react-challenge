import React, { PropTypes } from 'react';

import './Profile.css';
import './Form.css';
import './App.css';
const Profile = (props) => {
	return (
		<div className="myForm">
			<div className="myForm-title"><h1>SPORTSETTER</h1></div>
			<div className="formContainer Profile">
				<dl>
					<dt><h4>First Name</h4></dt>
					<dd>{props.firstName}</dd>
					<dt><h4>Last Name</h4></dt>
					<dd>{props.lastName}</dd>
					<dt><h4>Username</h4></dt>
					<dd>{props.userName}</dd>
					<dt><h4>Location</h4></dt>
					<dd>{props.location}</dd>
					<button className="mybtn back-btn" onClick={props.onReEdit}>Back to Form</button>
				</dl>

			</div>
		</div>
	);
};

Profile.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	userName: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	onReEdit: PropTypes.func.isRequired,

};

export default Profile;
