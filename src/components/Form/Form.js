import React, { Component } from 'react';

export default class Form extends Component {
  
  onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target.name.value === '') alert('Name Cannot be Empty');
    else if (event.target.job.value === '') alert('Job Cannot be Empty');
    else {
      this.props.changeValue(event.target.name.value, event.target.job.value);
      event.target.name.value = '';
      event.target.job.value = '';
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>Name</label>
        <input type='text' name='name'></input>
        <label>Job</label>
        <input type='text' name='job'></input>
        <button type='submit'>Add Employee</button>
      </form>
    );
  }
}
