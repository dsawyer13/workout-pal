import React from 'react';

export default function Exercise(props) {
  return(
    <div className="exercise">
      <span className="name">{props.name} </span>
      <span className="weight">{props.weight} lbs </span>
      <span className="sets">{props.sets} sets </span>
      <span className="reps">{props.reps} reps</span>
    </div>
  )

}

Exercise.defaultProps = {
  name: "Bench Press",
  weight: "225",
  sets: "3",
  reps: "5"
}
