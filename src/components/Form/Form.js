import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Form extends Component {
  state = {
    counter: 1,
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target.name.value === '') alert('Name Cannot be Empty');
    else if (event.target.job.value === '') alert('Job Cannot be Empty');
    else {
      this.props.changeValue(
        event.target.name.value,
        event.target.job.value,
        this.state.counter
      );
      event.target.name.value = '';
      event.target.job.value = '';
      this.setState({ counter: (this.state.counter += 1) });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='container'>
        <div className='form-group'>
          <label for='name'>Name</label>
          <input type='text' name='name' className='form-control'></input>
        </div>
        <div class='form-group'>
          <label for='job'>Job</label>
          <input type='text' name='job' className='form-control'></input>
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}
