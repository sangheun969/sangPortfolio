import React from "react";
import Banner from "../components/templates/Banner";
import ProjectWork from "../components/templates/ProjectWork";
import Header from "../components/templates/Header";
import Contents from "../components/templates/Contents";
const Main: React.FC = () => {
  return (
    <div className="">
      <div className="h-[100vh] w-full bg-black/0 peer-hover:bg-black/60 peer">
        <Header />
        <Banner />
        <ProjectWork />
        <Contents />
      </div>
    </div>
  );
};

export default Main;
