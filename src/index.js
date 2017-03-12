// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import {createStore, combineReducers} from 'redux';
const initialState = {
  result:15000,
  value:[]
}
const userReducer = (state={name:"demonjoub",age:18}, action) => {
  switch (action.type) {
    case "setName":
        state = {
          ...state,
          name:action.payload
        }
      break;
    case "setAge":
        state = {
          ...state,
          age:action.payload
        }
      break;
    default:

  }
  return state;
}

const EmployeeReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD":
        state = {
          ...state,
          result:state.result += action.payload,
          value :[...state.value,action.payload]
        }
      break;
    case "SUBTRACT":
        state = {
          ...state,
          result:state.result -= action.payload,
          value :[...state.value,action.payload]
        }
      break;
    default:

  }
  return state;
}

const store = createStore(combineReducers({
  EmployeeReducer, userReducer
}));
// output
store.subscribe(()=>{
  console.log("Update Store:", store.getState());
});
// call action
store.dispatch({
  type:"ADD",
  payload:15000
});
store.dispatch({
  type:"setName",
  payload:"Todsapol"
});
store.dispatch({
  type:"setAge",
  payload:20
})
