import React, { useEffect } from "react";
import Filter from "../features/Filter";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/ApiData";
import Loading from "../utils/Loader";

const Cards = () => {
  const searchData = useSelector((state) => state.searchData.value);
  const { data, status } = useSelector((state) => state.allData);
  // console.log(data);
  // console.log(status);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  //DISPLAY LOADER
  if (status === "loading") return <Loading />;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <Filter />
      <div className="d-flex align-items-center justify-content-center flex-wrap mt-4">
        {data?.map((x, i) => {
          return (
            <div
              className="card m-2 shadow"
              style={{ width: "300px", height: "300px" }}
              key={i}
            >
              <img
                className="card-img-top h-50 w-50 mx-auto mt-2"
                src={x?.links?.mission_patch}
                alt={x?.rocket?.rocket_name}
              />
              <div className="card-body">
                <h4 className="card-title">
                  Rocket Name: {x?.rocket?.rocket_name}
                </h4>
                <p className="card-text">Launch Year: {x?.launch_year}</p>
                <p className="card-text">
                  Upcoming: {x?.upcoming === true ? "True" : "False"}
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
