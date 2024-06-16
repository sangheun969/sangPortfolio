import React from "react";
import Banner from "../components/templates/Banner";
import ProjectWork from "../components/templates/ProjectWork";
import Header from "../components/templates/Header";
const Main: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Banner />
      <ProjectWork />
    </div>
  );
};

export default Main;
