import React from "react";
import Filters from "../components/Filters";
import LaunchList from "../components/LaunchList";
import { useDispatch } from "react-redux";
import { getPosts } from "../Api/Api";

const Home = () => {
  const [filters, setFilters] = React.useState({
    launchDate: "",
    launchStatus: "",
    upcoming: false,
  });
  const [rocketName, setRocketName] = React.useState("");
  const dispatch = useDispatch();

  const searchByRocketName = (e) => {
    e.preventDefault();
    dispatch(getPosts(rocketName));
  };

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(filters);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <Filters
        setFilters={setFilters}
        rocketName={rocketName}
        setRocketName={setRocketName}
        searchByRocketName={searchByRocketName}
      />
      <LaunchList filters={filters} />
    </div>
  );
};

export default Home;
