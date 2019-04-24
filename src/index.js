import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import LandingPage from './components/LandingPage.js';
import store from './store';
import './app.css';


ReactDom.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <>
            <nav className="navBar">
              <header>
                <h1 className="logo"><Link to ='/'><span className="title1">Workout</span><span className="title2">Pal</span></Link></h1>
              </header>
            </nav>
            <main>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/home' component={HomePage} />
            </main>
          </>
        </Switch>
      </Router>
    </Provider>
  , document.getElementById('root'));
