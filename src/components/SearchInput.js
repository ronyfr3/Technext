import React from "react";

const SearchInput = ({ onChange }) => (
    <div className="d-flex">
      <input
        data-testid="searchInput"
        className="form-control"
        type="text"
        placeholder="Search by rocket name"
        onChange={onChange}
        defaultValue=""
      />
      <button className="btn btn-primary">search</button>
    </div>
);

export default SearchInput;
