import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    job: '',
  };

  nameCangeHandler = (event) => {
    console.log('Name Change Handler');
    const name = event.target.value;
    this.setState({ name: name });
  };

  jobChangeHandler = (event) => {
    console.log('Job Change Handler');
    const job = event.target.value;
    this.setState({ job: job });
  };

  onSubmitHandler = (event) => {
    console.log('On Submit Handler');
    if (this.state.name === '') alert('Name Cannot be Empty');
    else if (this.state.job === '') alert('Job Cannot be Empty');
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>Name</label>
        <input type='text' onChange={this.nameCangeHandler}></input>
        <label>Job</label>
        <input type='text' onChange={this.jobChangeHandler}></input>
        <button type='submit'>Add Employee</button>
      </form>
    );
  }
}
