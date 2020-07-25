import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

class App extends Component {
  state = {
    employees: [],
  };

  submitValueHandler = (name, job, id) => {
    const emp = {
      name: name,
      job: job,
      id: id,
    };
    let arr = [...this.state.employees];
    arr.push(emp);
    this.setState({
      employees: arr,
    });
  };

  render() {
    return (
      <div>
        <Table employeeList={this.state.employees} />
        <Form changeValue={this.submitValueHandler} />
      </div>
    );
  }
}
export default App;
