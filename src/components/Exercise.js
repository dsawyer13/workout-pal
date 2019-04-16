import React from "react";
import Table from "react-bootstrap";

export default function Exercise(props) {
  return (
    <>
      <td className="name">{props.name}</td>
      <td className="weight">{props.weight} lbs</td>
      <td className="sets">{props.sets} sets</td>
      <td className="reps">{props.reps} reps</td>
    </>
  );
}

Exercise.defaultProps = {
  name: "",
  weight: "",
  sets: "",
  reps: ""
};
