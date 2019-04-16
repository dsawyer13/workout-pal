import React from "react";
import { Form, Col, Row, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { groupedOptions } from "../data.js";

export default class TableForm extends React.Component {
  constructor(props) {
    super(props);
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
            optionSelected={this.props.name}
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
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="5"
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
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="5"
          />
        </td>
        <td>
          <Form.Control
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.props.reps || ""}
            required
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="5"
          />
        </td>
        <td>
            <Button variant="success" type="submit">
              Update
            </Button>
            <Button variant="warning" type="submit">
              Cancel
            </Button>
        </td>
      </>
    );
  }
}
