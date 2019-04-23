import React from "react";
import Select from "react-select";
import { groupedOptions } from "../data.js";
import './css/buttons.css'
import './css/table-and-form.css';

export default class TableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      weight: this.props.weight,
      sets: this.props.sets,
      reps: this.props.reps
    };
  }

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSelect = e => {
    this.setState({ name: e.value });
  };

  onCancel = () => {
    this.props.onClick();
  };

  onSubmit = () => {
    if (this.state && this.props.onAdd) {
      this.props.onAdd(this.state)
    }
  };

  render() {
    const formatGroupLabel = data => (
      <div>
        <span>{data.label}</span>
      </div>
    );

    return (
      <>
        <td>
          <Select
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            placeholder="Exercise..."
            name="name"
            required
            value={{ value: this.state.name, label: this.state.name }}
            onChange={this.onSelect}
            className="select"
          />
        </td>
        <td>
          <div className="form-group">
            <div className="input-group">
              <input className="form-control weight"
                type="number"
                name="weight"
                placeholder="Weight"
                value={this.state.weight || ""}
                required
                onChange={this.onChange}
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  lbs
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>
          <input className="form-control sets"
            type="number"
            name="sets"
            placeholder="Sets"
            value={this.state.sets || ""}
            required
            onChange={this.onChange}
          />
        </td>
        <td>
          <input className="form-control reps"
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.state.reps || ""}
            required
            onChange={this.onChange}
          />
        </td>
        <td>
          <div className="edit-button">
            <button className="button success" onClick={() => this.onSubmit()}>
              Update
            </button>
          </div>
          <div className="delete-button">
            <button className="button warning" onClick={() => this.onCancel()}>
              Cancel
            </button>
          </div>
        </td>
      </>
    );
  }
}
