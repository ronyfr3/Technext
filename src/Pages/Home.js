import React from "react";
import Filters from "../components/Filters";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center mt-4 mb-4">
      <Filters />
      <Cards />
    </div>
  );
};

export default Home;
