import React from "react";
import Hackathon from "../organisms/Hackathon";

const Contents: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <div className="flex flex-col w-full  py-[150px]">
        <p className=" text-center font-bold text-[50px] font-['Tenada']">
          Contents
        </p>
      </div>
      <Hackathon />
    </div>
  );
};

export default Contents;
