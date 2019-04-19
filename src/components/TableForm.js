import React from "react";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { groupedOptions } from "../data.js";

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
      console.log("hi")
      this.props.onAdd(this.state)
    }
  };

  render() {
    console.log(this.state)
    const formatGroupLabel = data => (
      <div>
        <span>{data.label}</span>
      </div>
    );

    return (
      <>
        <td style={{width:"20%"}}>
          <Select
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            placeholder="Exercise..."
            name="name"
            required
            value={{ value: this.state.name, label: this.state.name }}
            onChange={this.onSelect}
          />
        </td>
        <td style={{width:"15%"}}>
          <InputGroup>
            <Form.Control
              type="number"
              name="weight"
              placeholder="Weight"
              value={this.state.weight || ""}
              required
              onChange={this.onChange}
            />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroupPrepend">lbs</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </td>
        <td style={{width:"15%"}}>
          <Form.Control
            type="number"
            name="sets"
            placeholder="Sets"
            value={this.state.sets || ""}
            required
            onChange={this.onChange}
          />
        </td>
        <td style={{width:"15%"}}>
          <Form.Control
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.state.reps || ""}
            required
            onChange={this.onChange}
          />
        </td>
        <td>
          <Button variant="success" onClick={() => this.onSubmit()}>
            Update
          </Button>
          <Button variant="warning" onClick={() => this.onCancel()}>
            Cancel
          </Button>
        </td>
      </>
    );
  }
}
