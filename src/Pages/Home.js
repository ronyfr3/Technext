import React from "react";
import { useDispatch } from "react-redux";
import Filters from "../components/Filters";
import LaunchList from "../components/LaunchList";
import getPosts from "../Api/Api";

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

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <Filters
        filters={filters}
        setFilters={setFilters}
        setRocketName={setRocketName}
        searchByRocketName={searchByRocketName}
      />
      <LaunchList filters={filters} />
    </div>
  );
};

export default Home;
