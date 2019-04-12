import React from 'react';
import './workout.css';

export default function Workout(props) {
  const exerciseNum = props.exercises.length;

  return(

    <div className="workout" id={props.id}>
      <span className="date">{props.date}</span>
      <span className="exerciseNum">{exerciseNum} exercises</span>
    </div>
  );
}

Workout.defaultProps ={
  date: '',
  exerciseNum: ''
}
