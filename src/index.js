import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import App from './App';
import Login from './Login/Login';
import HelloComponent from './HelloComponent';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

// function HelloComponent() {
//   return <p>HelloComponent</p>
// }

// const HelloComponent = () => HelloComponent

// class StateFullComponent extends React.Component{
//   render(){
//     return<p>StateFullComponent</p>
//   }
// }

ReactDOM.render(
  <Login/>,document.getElementById('root')
);

reportWebVitals();
