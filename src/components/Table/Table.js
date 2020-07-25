import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.props.employeeList.map((employee) => {
              return (
                <tr key={employee.id}>
                <td> {employee.id} </td>
                  <td> {employee.name} </td>
                  <td> {employee.job} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
