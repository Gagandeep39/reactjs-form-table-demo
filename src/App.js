import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';

class App extends Component {
  state = {
    name: '',
    job: '',
  };

  submitValueHandler = (name, job) => {
    this.setState({
      name: name,
      job: job,
    });
    console.log('Added Data' + this.state.name);
  };

  render() {
    return (
      <div>
        <Form changeValue={this.submitValueHandler} />
      </div>
    );
  }
}
export default App;
