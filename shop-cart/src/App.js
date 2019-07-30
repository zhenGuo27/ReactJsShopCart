import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
//import fontawesomeFreeSolid from '@fortawesome/fontawesome-free-solid';
//fontawesome.library.add(brands, fontawesomeFreeSolid);

//import { faCheckSquare, faCoffee, faStarHalf } from '@fortawesome/fontawesome-free-solid';
//fontawesome.library.add(brands, faCheckSquare, faCoffee, faStarHalf);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    );
  }
}

export default App;


