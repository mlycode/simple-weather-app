import React, { Component, Fragment } from 'react';

import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Titles />
        <Form />
        <Weather />
      </Fragment>
    );
  }
};

export default App;