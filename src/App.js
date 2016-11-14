import React, { Component } from 'react';
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
    };
  }

  onFieldChange(field, value) {
    this.setState({ [field]: value });
  }

  onEditingComplete() {
    this.setState({ editing: false });
  }

  render() {
    let component;

    if (this.state.editing) {
      component = <Form
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        onChange={this.onFieldChange.bind(this)}
        onSubmit={this.onEditingComplete.bind(this)} />;
    } else {
      component = <Profile
        firstName={this.state.firstName}
        lastName={this.state.lastName} />;
    }

    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

export default App;
