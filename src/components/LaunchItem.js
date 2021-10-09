import React from "react";

const LaunchItem = ({
  mission_patch,
  rocket_name,
  upcoming,
  launch_year,
  launch_success,
}) => {
  return (
    <div
      className="card m-3 shadow-sm text-center"
      style={{ width: "300px", height: "300px" }}
    >
      <img
        className="card-img-top h-50 w-50 mx-auto mt-3 mb-4"
        src={mission_patch}
        alt={rocket_name}
      />
      <div className="card-body bg-dark bg-gradient">
        <h5 className="card-title text-info">Rocket Name: {rocket_name}</h5>
        <p className="card-text text-white">Launch Year: {launch_year}</p>
        <p className="card-text text-secondary">
          Launch Status: {launch_success === true ? "Success" : "Failure"}
        </p>
        <small className="card-text text-secondary">
          Upcoming Status: {upcoming === true ? "Yes" : "No"}
        </small>
      </div>
    </div>
  );
};

export default LaunchItem;
