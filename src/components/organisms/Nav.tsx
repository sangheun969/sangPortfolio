import React, { useState, useEffect } from "react";
import Button from "../atoms/Button";
import { GitHub, Tstory } from "../../image/index";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const githubButtonClick = () => {
    window.open("https://github.com/sangheun969", "_blank");
  };
  const tStoryButtonClick = () => {
    window.open("https://sang969.tistory.com/", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProject = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSrolled = window.scrollY > 0;
      setScrolled(isSrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header flex w-full justify-between py-[15px] fixed  px-10 transition duration-300 delay-150 ${
        scrolled ? "bg-[#696B6E] " : ""
      }`}
    >
      <div className="logo w-[200px]  "></div>
      <nav>
        <ul
          className={`flex gap-[70px] font-bold mt-5 ${
            scrolled ? "text-black" : ""
          }`}
        >
          <li>
            <Button size="md" label="About" onClick={scrollToTop}></Button>
          </li>
          <li>
            <Button
              size="md"
              label="Project"
              onClick={scrollToProject}
            ></Button>
          </li>
          <li>
            <Button size="md" label="Contest"></Button>
          </li>
          <li>
            <Button size="md" label="Skills"></Button>
          </li>
        </ul>
      </nav>
      <div className="mt-5 flex flex-row gap-5">
        <Button variant="sendBtn1" size="mm" onClick={githubButtonClick}>
          <img className="w-[35px]" src={GitHub} alt="" />
        </Button>
        <Button variant="sendBtn1" size="mm" onClick={tStoryButtonClick}>
          <img className="w-[35px]" src={Tstory} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
