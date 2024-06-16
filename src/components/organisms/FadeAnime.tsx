import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Intro1 from "../molecules/Intro1";
import Intro2 from "../molecules/Intro2";

const FadeAnime: React.FC = () => {
  const [reset, setReset] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
        setReset((prev) => !prev);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <Fade
        key={reset ? "left1" : "left2"}
        direction={"left"}
        className="font-bold font-serif text-7xl "
      >
        <Intro1 />
      </Fade>
      <Fade
        key={reset ? "right1" : "right2"}
        direction={"right"}
        className="text-7xl mt-[80px]"
      >
        <Intro2 />
      </Fade>
    </>
  );
};

export default FadeAnime;
