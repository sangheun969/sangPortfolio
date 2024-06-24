import React from "react";
import FadeAnime from "../organisms/FadeAnime";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="py-16 border w-full h-[100vh] bg-[#F4F3ED] ">
        <FadeAnime />
      </div>
    </div>
  );
};

export default Banner;
