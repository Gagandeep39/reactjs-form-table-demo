import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Table extends Component {

  render() {
    if (this.props.employeeList.length === 0) {
      return <div></div>;
    } else {
      return (
        <div className='container'>
          <h3>Employee Data</h3>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.employeeList.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td> {employee.name} </td>
                    <td> {employee.job} </td>
                    <td>
                      <button className='btn btn-primary' onClick={() => this.props.deleteHandle(employee.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
