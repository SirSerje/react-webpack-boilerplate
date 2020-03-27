// @flow
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import logo from '../assets/images/logo.svg';
// For checking availability RHL, HMR with hooks features:
//import HookUsage from './HookUsage';

/*type Props = {

};*/

class App extends React.Component/*<Props>*/ {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          Includes: React 16.13+, sass, less, css (with normalizing),<br/> Jest, Enzyme, Hot Module Reload,
          React Hot Reload
        </p>
        {/* <HookUsage/> */}
      </div>
    );
  }
}

export default hot(App);
