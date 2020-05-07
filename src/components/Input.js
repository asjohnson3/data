import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value, label)}
      />
    </div>
  );
}
