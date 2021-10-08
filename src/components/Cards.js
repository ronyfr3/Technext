import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/ApiData";
import Loading from "../components/Loader";

const Cards = () => {
  const { data, status } = useSelector((state) => state.posts);
  console.log("posts", data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (status === "loading") return <Loading />;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
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
                <small className="card-text text-muted">
                  Rocket Type: {x?.rocket?.rocket_type}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
