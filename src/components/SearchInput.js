import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="d-flex">
      <input
        data-testid="searchInput"
        className="form-control"
        type="text"
        placeholder="Type here..."
        value={value}
        onChange={onChange}
      />
      <button className="btn btn-primary">search</button>
    </div>
  );
};

export default SearchInput;
