import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return(


    <main>
      <div className="landingPage">
        <div className="banner">
          <h1 className="title">Workout Pal</h1>
          <p className="tagline">A better body. Simplified.</p>
        </div>
        <div className="description">
          <h2>How it works</h2>

          <p>Workout Pal uses the scientifically proven method of progressive
            overload to get you results faster. Watch your strength improve week
             by week with your personalized strength statistics.</p>
          <div className="graphImage">Placeholder for image</div>
          <button><Link to="/home">Get Started</Link></button>
        </div>
      </div>
      <footer>Footer</footer>
    </main>

  )
}
