import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredData } from "../redux/Data";
import Search from "./Search";

const Filter = () => {
  const [dropdown, setDropdown] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filteredData(dropdown));
  };

  return (
    <div className="d-flex align-items-start justify-content-center mt-4">
      <Search />
      {/* filterBy Options */}
      <form onSubmit={handleSubmit}>
        <select
          className="form-select ms-3"
          defaultValue={"DEFAULT"}
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled hidden>
            Filters Data
          </option>
          <option value="last-week">By Last Week</option>
          <option value="last-month">By Last Month</option>
          <option value="last-year">By Last Year</option>
          <option value="launch-status">By Launch Status</option>
          <option value="upcoming">By upcoming</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
