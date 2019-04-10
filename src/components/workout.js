import React from 'react';
import './workout.css';

export default function Workout(props) {
  return(
    <div className="workout">
      <span className="date">{props.date}</span>
      <span className="exerciseNum">{props.exerciseNum} exercises</span>
    </div>
  );
}

Workout.defaultProps ={
  date: '',
  exerciseNum: ''
}
