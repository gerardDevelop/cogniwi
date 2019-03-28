import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {

    return (
      <div>
        <Navbar isAuthenticated={false} />
        <div className="container">
          <Landing />
          

        </div>
      </div>
    );
  }
}

export default App;
