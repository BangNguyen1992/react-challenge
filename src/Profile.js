import React, { PropTypes } from 'react';

import './Profile.css';

const Profile = (props) => {
  return (
    <div className="Profile">
      <dl>
        <dt>First name</dt>
        <dd>{props.firstName}</dd>
        <dt>Last name</dt>
        <dd>{props.lastName}</dd>
      </dl>
    </div>
  );
};

Profile.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Profile;
