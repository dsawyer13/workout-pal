import React from 'react';

export default function WorkoutForm(props) {

  // onSubmit(event) {
  //   event.preventDefault();
  //   const name = this.name.value.trim();
  //   if (name && this.props.onAdd) {
  //     this.props.onAdd(name)
  //   }
  // }

  return (
      <form className="workoutForm" onSubmit={(e) => this.onSubmit(e)}>
        <input className="woName" type="text" />
        <input className="woWeight"type="number" />
        <input className="woSets"type="number" />
        <input className="woReps"type="number" />
        <button>Submit</button>
      </form>
  )
}
