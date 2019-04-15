import React from "react";

export default function Exercise(props) {
  return (
    <li className="exercise" id={props._id}>
      <span className="name">{props.name}</span>
      <span className="weight">{props.weight} lbs</span>
      <span className="sets">{props.sets} sets</span>
      <span className="reps">{props.reps} reps</span>
    </li>
  );
}

Exercise.defaultProps = {
  name: "",
  weight: "",
  sets: "",
  reps: ""
};
