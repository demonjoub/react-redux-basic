import React, { Component } from 'react';

class Salary extends Component {

  render() {
    let {salary} = this.props;
    return (

      <h1>Salary: {salary} </h1>
    );
  }
}



export default Salary;
