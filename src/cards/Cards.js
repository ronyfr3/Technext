import React from "react";
import { useGetDataQuery } from "../redux/BaseApi";
import Loading from "../utils/Loader";

const Cards = () => {
  const { data, isFetching } = useGetDataQuery();
  if (isFetching) return <Loading />;
  return (
    <div className="container d-flex align-items-center justify-content-center flex-wrap mt-4 mb-4">
      {data?.map((x) => {
        return (
          <div className="card m-2" style={{ width: "300px", height: "300px" }}>
            <img
              className="card-img-top h-50 w-50 mx-auto mt-2"
              src={x.links.mission_patch}
              alt={x.rocket.rocket_name}
            />
            <div className="card-body">
              <h4 className="card-title">
                Rocket Name: <b>{x.rocket.rocket_name}</b>
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
  );
};

export default Cards;
