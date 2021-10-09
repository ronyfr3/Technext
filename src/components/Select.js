import React from "react";

const Select = ({ onChange, options }) => {
  return (
    <select
      className="form-select ms-3"
      defaultValue={"DEFAULT"}
      onChange={onChange}
    >
      {options.map(({ value, text }, i) => (
        <option key={i} value={value} disabled={i === 0}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
