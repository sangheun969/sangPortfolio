import React, { useState } from "react";
import Nav from "../organisms/Nav";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GitHub, Tstory, SangTitle } from "../../image/index";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const githubButtonClick = () => {
    window.open("https://github.com/sangheun969", "_blank");
  };
  const tStoryButtonClick = () => {
    window.open("https://sang969.tistory.com/", "_blank");
  };

  const handleProjectClick = () => {
    if (location.pathname === "/project") {
      document.getElementById("work1")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/project");
    }
  };

  return (
    <div className="peer h-24 w-full px-4 flex flex-row justify-between items-center bg-black/5 hover:bg-black/0">
      <div className="w-[70px] h-[70px] ">
        <img src={SangTitle} alt="" />
      </div>
      <ul className="flex gap-12 font-NOTO text-xl uppercase font-semibold text-[#666] ">
        <li className="hover:text-[#333] cursor-pointer">
          <Link to="/">about</Link>
        </li>
        <li className="hover:text-[#333] cursor-pointer">
          <span onClick={handleProjectClick}>project</span>
        </li>
        <li className="hover:text-[#333] cursor-pointer">
          <Link to="/contest">contest222</Link>
        </li>
        <li className="hover:text-[#333] cursor-pointer">
          <Link to="/skills">skills</Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={githubButtonClick}
        >
          <img src={GitHub} alt="" />
        </div>
        <div
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={tStoryButtonClick}
        >
          <img src={Tstory} alt="" />
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
