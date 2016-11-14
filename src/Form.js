import React, { Component, PropTypes } from 'react';

import './Form.css';

class Form extends Component {
  inputChanged(name, e) {
    e.preventDefault();
    this.props.onChange(name, e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>
          <span>First name</span>
          <input type="text" className="Form-text-input" value={this.props.firstName} onChange={this.inputChanged.bind(this, "firstName")} />
        </label>
        <label>
          <span>Last name</span>
          <input type="text" className="Form-text-input" value={this.props.lastName} onChange={this.inputChanged.bind(this, "lastName")} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
