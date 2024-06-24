import React from "react";
import Work1 from "../molecules/Work1";
import Work2 from "../molecules/Work2";
import Work3 from "../molecules/Work3";
const ProjectWork: React.FC = () => {
  return (
    <div id="work1" className=" flex flex-col w-full  py-[150px] ">
      <p className=" text-center font-bold text-[50px] font-['Tenada']">
        Project
      </p>
      <div className=" flex flex-col justify-around h-[1500px] ">
        <Work1 />
        <Work2 />
        <Work3 />
      </div>
    </div>
  );
};

export default ProjectWork;
