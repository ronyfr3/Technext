import React from "react";

const Select = ({ onChange, options, value }) => (
    <select
      className="form-select m-2"
      onChange={onChange}
      data-testid="select"
      value={value}
    >
      {options.map(({ value: optionValue, text }, i) => (
        <option key={i} value={optionValue} disabled={i === 0}>
          {text}
        </option>
      ))}
    </select>
);

export default Select;
