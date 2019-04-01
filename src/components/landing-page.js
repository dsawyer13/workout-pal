import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './landing-page.css';
import HomePage from './home-page.js';

export default function LandingPage() {
  return(
    <Router>

    <main>
      <div className="landingPage">
        <div className="banner">
          <h1 className="title">Fit Tracker</h1>
          <p className="tagline">A better body. Simplified.</p>
        </div>
        <div className="description">
          <h2>How it works</h2>

          <p>Fit Tracker uses the scientifically proven method of progressive
            overload to get you results faster. Watch your strength improve week
             by week with your personalized strength statistics.</p>
          <div class="graphImage">Placeholder for image</div>
          <button><Link to="/home">Get Started</Link></button>
        </div>
      </div>
      <footer role="content-info">Footer</footer>
      
      <Route exact path='/home' component={HomePage} />
    </main>
    </Router>
  )
}
