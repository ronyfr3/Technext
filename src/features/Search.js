import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "../redux/Data";

const Search = () => {
  const { data } = useSelector((state) => state.allData);
  const [search, setSearch] = useState("");
  const Searchfilter = data
    ?.filter((x) => {
      if (search === "") {
        return x;
      } else if (
        x.rocket.rocket_name.toLowerCase().includes(search.toLowerCase())
      ) {
        return x;
      }
      return 0;
    })
    .map((x) => x);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filteredData(Searchfilter));
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        data-testid="searchInput"
        className="form-control"
        type="text"
        placeholder="type here..."
        value={search}
        onChange={handleChange}
      />
      <button className="btn btn-primary">search</button>
    </form>
  );
};

export default Search;
