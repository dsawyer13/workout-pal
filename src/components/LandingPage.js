import React from 'react';
import { Link } from 'react-router-dom';
import './css/landing-page.css';


export default function LandingPage() {
  return(
    <body className="background">
      <div className="landingPage">
        <h1 className="tagline"><div>A BETTER BODY<span>.</span></div><div>SIMPLIFIED<span>.</span></div></h1>
        <div className="info">Workout Pal tracks your progress so you don't have to.
        Log workouts with ease with our comprehensive list of built-in exercises.</div>
        <button class="linkButton"><Link to="/home">Get Started</Link></button>
      </div>
    </body>
  )

}
