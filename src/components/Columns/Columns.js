import React, { useState } from "react";
import { Form, Button, Grid } from "semantic-ui-react";
import Input from "../Input";
import "./Columns.css";

export const Columns = ({ values, onNewFilter }) => {
  let columns = values["0"];
  const initialState = {};
  Object.keys(columns).forEach((key) => {
    initialState[key] = "";
  });
  const [state, setState] = useState(initialState);

  function handleChange(value, key) {
    setState((prevState) => ({ ...prevState, [key]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const filter = state;
      const response = await fetch("/simple_chart", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
      });
      if (response.ok) {
        console.log("Response Worked!");

        response.json().then((data) => {
          onNewFilter(data);
        });
      }
    } catch (error) {}
  }

  if (!columns) {
    return null;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Grid>
        <Grid.Row columns={2}>
          {Object.keys(columns).map((key) => (
            <Grid.Column>
              <Input
                label={key}
                key={key}
                value={state[key]}
                onChange={handleChange}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>

      <Button color="teal" type="submit" className="filtering-submit-button">
        SUBMIT
      </Button>
    </Form>
  );
};
