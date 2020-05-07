import React, { useState } from "react";
import { Form, Checkbox } from "semantic-ui-react";
import Input from "./Input";

export const Columns = ({ values }) => {
  let columns = values["0"];
  console.log(columns);
  const initialState = {};
  Object.keys(columns).forEach((key) => {
    initialState[key] = "";
  });
  const [state, setState] = useState(initialState);

  function handleChange(value, key) {
    setState((prevState) => ({ ...prevState, [key]: value }));
  }

  if (!columns) {
    return null;
  }
  return (
    <Form>
      {Object.keys(columns).map((key) => (
        <Form.Field>
          <Input
            key={key}
            label={key}
            value={state[key]}
            onChange={handleChange}
          />
        </Form.Field>
      ))}
    </Form>
  );
};
