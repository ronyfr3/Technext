import React from "react";
import Checkbox from "./Checkbox";
import SearchInput from "./SearchInput";
import Select from "./Select";

const launchDateOptions = [
  {
    value: "DEFAULT",
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
    value: "DEFAULT",
    text: "Choose launch status",
  },
  {
    value: "success",
    text: "Success",
  },
  { value: "failure", text: "Failure" },
];

const Filters = ({
  setFilters,
  rocketName,
  setRocketName,
  searchByRocketName,
}) => {
  return (
    <form
      onSubmit={searchByRocketName}
      className="container d-flex flex-column justify-content-center align-items-center"
    >
      <SearchInput
        value={rocketName}
        onChange={(e) => setRocketName(e.target.value)}
      />
      <div className="d-flex mt-1">
        <div className="d-flex m-2">
          <Select
            onChange={(e) =>
              setFilters((oldFilters) => ({
                ...oldFilters,
                launchDate: e.target.value,
              }))
            }
            options={launchDateOptions}
          />
          <Select
            options={launchStatusOption}
            onChange={(e) =>
              setFilters((oldFilters) => ({
                ...oldFilters,
                launchStatus: e.target.value,
              }))
            }
          />
        </div>
        <Checkbox
          label="Upcomming"
          onChange={() =>
            setFilters((oldFilters) => ({
              ...oldFilters,
              upcoming: !oldFilters.upcoming,
            }))
          }
        />
      </div>
    </form>
  );
};

export default Filters;
