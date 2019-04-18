import React from "react";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { groupedOptions } from "../data.js";

export default class TableForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onCancel = () => {
    this.props.onCancel(false)
  }

  onChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  onSelect = (optionSelected) => {
    this.setState({name: optionSelected})
  }

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
            value={{value: this.props.name, label: this.props.name}}
            onChange={this.onChange}
          />
        </td>
        <td>
          <InputGroup>
            <Form.Control
              type="number"
              name="weight"
              placeholder="Weight"
              value={this.props.weight || ""}
              required
              onChange={this.onChange}
            />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroupPrepend">
                lbs
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </td>
        <td>
          <Form.Control
            type="number"
            name="sets"
            placeholder="Sets"
            value={this.props.sets || ""}
            required
            onChange={this.onSelect}
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.props.reps || ""}
            required
            onChange={this.onChange}
          />
        </td>
        <td>
            <Button variant="success">
              Update
            </Button>
            <Button variant="warning" onClick={this.onCancel}>
              Cancel
            </Button>
        </td>
      </>
    );
  }
}
