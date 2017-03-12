import React, { Component } from 'react';
import User from './User';
import Salary from './Salary';
import {connect} from 'react-redux';


class App extends Component {
  handlerChangeName(e) {
    // console.log(this.props);
    this.props.setName("redux tutorial");
  }
  handlerChangeAge(e) {
    this.props.setAge(20);
  }

  handlerChangeSalary(e) {
    this.props.ADD(5000);
  }
  render() {
    return (
      <div>
        <User username={this.props.user.name}
              age={this.props.user.age}/>
        <Salary salary={this.props.emp.result}/>
        <button onClick={this.handlerChangeName.bind(this)}>ChangeName</button><br/>
        <button onClick={this.handlerChangeAge.bind(this)}>ChangeAge</button><br/>
        <button onClick={this.handlerChangeSalary.bind(this)}>ChangeSalary</button><br/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user,
    emp :state.emp
  }
}
// set value
const mapDispatchToProps = (dispatch) => {
  return {
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload:name
      })
    },
    setAge:(age)=>{
      dispatch({
        type:"setAge",
        payload:age
      })
    },
    ADD:(num)=>{
      dispatch({
        type:"ADD",
        payload:num
      })
    }
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
