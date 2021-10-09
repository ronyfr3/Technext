import React from "react";

const Checkbox = ({ label, onChange, value }) => (
    <div className="form-check pt-3">
      <label className="form-check-label" htmlFor="upcoming">
        {label}
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        checked={value}
        id="upcoming"
        onChange={onChange}
      />
    </div>
);

export default Checkbox;
