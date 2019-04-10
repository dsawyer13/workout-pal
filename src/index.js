import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/home-page.js';
import LandingPage from './components/landing-page.js'
import store from './store';
import './index.css';
import './reset.css';




ReactDom.render((
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="app">
            <nav className="navBar">
              <header><h1><Link to ='/'>Fit Tracker</Link></h1></header>
            </nav>
            <main>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/home' component={HomePage} />
            </main>
          </div>
        </Switch>
      </Router>
    </Provider>
  ), document.getElementById('root'));
