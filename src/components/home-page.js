import React from 'react';
import NewWorkoutSection from './new-workout-section.js';
import PreviousWorkoutSection from './previous-workout-section.js';
import Stats from './stats.js'


export default function HomePage(props) {
  return(
    <div className="homePage">
      <PreviousWorkoutSection />
      <NewWorkoutSection />
      <Stats />
    </div>
  )
}
