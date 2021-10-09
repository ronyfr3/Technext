import React from "react";

const Checkbox = ({ label, onChange }) => {
  return (
    <div className="form-check pt-3">
      <label className="form-check-label" htmlFor="upcoming">
        {label}
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="upcoming"
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
