import React, { Component } from 'react';

class User extends Component {
  render() {
    let {username,age} = this.props;
    return (
      <div>
        <h1>Hello: {username}</h1>
      <h1>Age: {age} </h1>
      </div>
    );
  }
}



export default User;
