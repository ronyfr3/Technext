import React, { useState } from "react";
import { useGetDataQuery } from "../redux/BaseApi";
import Loading from "../utils/Loader";

const Cards = () => {
  const { data, isFetching } = useGetDataQuery();
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");
  console.log(dropdown);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(Searchfilter);
  };

  //Dropdown Data
  // const filteredData = data.filter(
  //   (x) => x.upcoming === true && dropdown === "upcoming"
  // );
  // console.log(filteredData);

  //DISPLAY ALL DATA IF SEARCH STATE EMPTY
  const SearchData = value?.length <= 0 ? data : value;

  //DISPLAY LOADER
  if (isFetching) return <Loading />;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <div className="d-flex align-items-start justify-content-center mt-4">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            className="form-control"
            type="text"
            placeholder="type here..."
            value={search}
            onChange={handleChange}
          />
          <button className="btn btn-primary">search</button>
        </form>
        {/* filterBy Options */}
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
      </div>
      <div className="d-flex align-items-center justify-content-center flex-wrap mt-4">
        {SearchData?.map((x, i) => {
          return (
            <div
              className="card m-2 shadow"
              style={{ width: "300px", height: "300px" }}
              key={i}
            >
              <img
                className="card-img-top h-50 w-50 mx-auto mt-2"
                src={x.links.mission_patch}
                alt={x.rocket.rocket_name}
              />
              <div className="card-body">
                <h4 className="card-title">
                  Rocket Name: {x.rocket.rocket_name}
                </h4>
                <p className="card-text">Launch Year: {x.launch_year}</p>
                <p className="card-text">
                  Upcoming: {x.upcoming === true ? "True" : "False"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
