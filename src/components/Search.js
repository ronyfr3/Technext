import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/ApiData";
import add from "date-fns/add";
import format from "date-fns/format";

const Search = () => {
  const [filter, setFilter] = useState({ rocketName: "", "start/end": "" });

  const handleChange = (e) => {
    setFilter((oldFilter) => ({
      ...oldFilter,
      rocketName: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPosts(filter));
  };
  console.log("ll", filter);
  const handleLaunchDateChange = (e) => {
    if (e.target.value === "last-week") {
      const start = format(new Date(), "yyyy-MM-dd");
      const end = format(add(new Date(), { weeks: 1 }), "yyyy-MM-dd");
      setFilter((oldFilter) => ({
        ...oldFilter,
        "start/end": `start=${start}&end=${end}`,
      }));
    } else if (e.target.value === "last-month") {
      const start = format(new Date(), "yyyy-MM-dd");
      const end = format(add(new Date(), { months: 1 }), "yyyy-MM-dd");
      setFilter((oldFilter) => ({
        ...oldFilter,
        "start/end": `start=${start}&end=${end}`,
      }));
    } else if (e.target.value === "last-year") {
      const start = format(new Date(), "yyyy-MM-dd");
      const end = format(add(new Date(), { year: 1 }), "yyyy-MM-dd");
      setFilter((oldFilter) => ({
        ...oldFilter,
        "start/end": `start=${start}&end=${end}`,
      }));
    }

    dispatch(getPosts(filter));
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        data-testid="searchInput"
        className="form-control"
        type="text"
        placeholder="Type here..."
        value={filter.rocketName}
        onChange={handleChange}
      />
      <button className="btn btn-primary">search</button>
      <select
        className="form-select ms-3"
        defaultValue={"DEFAULT"}
        onChange={handleLaunchDateChange}
      >
        <option value="DEFAULT" disabled hidden>
          Launch Date
        </option>
        <option value="last-week">By Last Week</option>
        <option value="last-month">By Last Month</option>
        <option value="last-year">By Last Year</option>
      </select>
    </form>
  );
};

export default Search;
