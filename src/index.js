import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './components/Signup'
// import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);
