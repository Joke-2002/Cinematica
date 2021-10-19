import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import Homenavbar from './Homenavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Series from './Series';
import People from './People';
import Genres from './Genres';
import Comment from './Comment';
import PeoCom from './PeoCom'


ReactDOM.render(
    <Router>
      <Homenavbar/>
      <Switch>
      <Route path='/movies'>
        <Movies/>
      </Route>
      <Route path='/genres/:id'>
        <Genres/>
      </Route>
        <Route path='/peocom/:id' component={PeoCom} />
        <Route path='/comment/:id' component={Comment} />
        <Route path='/series' component={Series} /> 
        <Route path='/people' component={People} />    
        <Route path='/' component={App} />    
      </Switch>
    </Router>,
  document.getElementById('root')
);