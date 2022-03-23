import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div class="container px-4">
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
