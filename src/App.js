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

  deleteButtonHandler = (id) => {
    let index = this.state.employees.findIndex(emp => emp.id === id);
    let empArray = this.state.employees;
    empArray.splice(index, 1);
    this.setState({employees: empArray});
  }

  render() {
    return (
      <div>
        <Table employeeList={this.state.employees} deleteHandle={this.deleteButtonHandler}/>
        <Form changeValue={this.submitValueHandler} />
      </div>
    );
  }
}
export default App;
