import React from "react";
import Checkbox from "./Checkbox";
import SearchInput from "./SearchInput";
import Select from "./Select";

const launchDateOptions = [
  {
    value: "",
    text: "Choose launch date",
  },
  {
    value: "last-week",
    text: "Last week",
  },
  {
    value: "last-month",
    text: "Last month",
  },
  {
    value: "last-year",
    text: "Last year",
  },
];

const launchStatusOption = [
  {
    value: "",
    text: "Choose launch status",
  },
  {
    value: "success",
    text: "Success",
  },
  { value: "failure", text: "Failure" },
];

const Filters = ({
  setFilters, setRocketName, searchByRocketName, filters,
}) => (
    <form
      onSubmit={searchByRocketName}
      className="container d-flex flex-column justify-content-center align-items-center"
    >
      <SearchInput onChange={(e) => setRocketName(e.target.value)}/>
      <div className="d-flex flex-column mt-1">
        <div className="d-flex m-2">
          <Select
            onChange={(e) => setFilters((oldFilters) => ({
              ...oldFilters,
              launchDate: e.target.value,
            }))
            }
            options={launchDateOptions}
            value={filters.launchDate}
          />
          <Select
            options={launchStatusOption}
            onChange={(e) => setFilters((oldFilters) => ({
              ...oldFilters,
              launchStatus: e.target.value,
            }))
            }
            value={filters.launchStatus}
          />
          <Checkbox
          label="Upcomming"
          onChange={() => setFilters((oldFilters) => ({
            ...oldFilters, upcoming: !oldFilters.upcoming,
          }))}
          value={filters.upcoming}
        />
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={() => setFilters({
            launchDate: "",
            launchStatus: "",
            upcoming: false,
          })}>Reset filters</button>
        </div>
      </div>
    </form>
);

export default Filters;
