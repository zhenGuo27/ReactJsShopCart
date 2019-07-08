import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(brands, faCheckSquare, faCoffee);

class App extends Component {
  render() {
    return (
      <Layout></Layout>
    );
  }
}

export default App;


