import React from "react";
import FadeAnime from "../organisms/FadeAnime";

const Banner: React.FC = () => {
  return (
    <div>
      <div>
        <p className="w-full h-[100vh] border flex flex-grow justify-center items-center bg-[#0B1018]">
          <FadeAnime />
        </p>
      </div>
    </div>
  );
};

export default Banner;
