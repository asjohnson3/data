import React from "react";
import { Form } from "semantic-ui-react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
        <Form.Input
          label={label}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value, label)}
        />
    </div>


  );
}
