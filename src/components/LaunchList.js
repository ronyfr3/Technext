import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loader";
import filterData from "../utils/helpers";
import LaunchItem from "./LaunchItem";

const LaunchList = ({ filters }) => {
  const { data: launchList, status } = useSelector((state) => state.launches);
  const filteredLaunchList = React.useMemo(
    () => filterData(launchList, filters),
    [launchList, filters],
  );
  if (status === "loading") return <Loading />;

  if (filteredLaunchList.length === 0) {
    return (
      <div className="shadow-sm p-3 mt-3 rounded">
        No data available to show
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <div className="d-flex align-items-center justify-content-center flex-wrap mt-4">
        {filteredLaunchList?.map((launchItem, i) => {
          return (
            <LaunchItem
              key={i}
              mission_patch={launchItem?.links?.mission_patch}
              rocket_name={launchItem?.rocket?.rocket_name}
              launch_year={launchItem?.launch_year}
              launch_success={launchItem?.launch_success}
              upcoming={launchItem?.upcoming}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LaunchList;
