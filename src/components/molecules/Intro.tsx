import React, { useEffect, useRef, useState } from "react";
import TextHeader from "../atoms/TextHeader";
import TextHeaerSmall from "../atoms/TextHeaderSmall";
const Intro: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const textRefs = useRef([0, 0, 0, 0]);
  const [scrollCompleted, setScrollCompleted] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // console.log(position, text1, position * 0.5);

    textRefs.current[0] = position * 0.5 < 50 ? -position * 0.5 : -50;
    textRefs.current[1] = position * 0.25 < 50 ? -position * 0.25 : -50;
    textRefs.current[2] = position * 0.15 < 50 ? -position * 0.15 : -50;
    textRefs.current[3] = position * 0.1 < 50 ? -position * 0.1 : -50;
    if (!scrollCompleted && position > 0) {
      setScrollCompleted(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden h-[140px] relative ">
        <div
          className={"sticky "}
          style={{
            transform: `translateY(${textRefs.current[0]}%) `,
            transition: "transform 0.1s ease-out",
          }}
        >
          <TextHeader>안녕하세요</TextHeader>
          <TextHeader>안녕하세요</TextHeader>
        </div>
      </div>
      <div className="overflow-hidden h-[140px] relative ">
        <div
          className="sticky"
          style={{
            transform: `translateY(${textRefs.current[1]}%) `,
            transition: "transform 0.1s ease-out",
          }}
        >
          <TextHeader>사용자 경험을 최우선적인</TextHeader>
          <TextHeader>사용자 경험을 최우선적인</TextHeader>
        </div>
      </div>
      <div className="overflow-hidden h-[138px] relative ">
        <div
          style={{
            transform: `translateY(${textRefs.current[2]}%) `,
            transition: "transform 0.1s ease-out",
          }}
        >
          <TextHeaerSmall>프론트엔드 개발자</TextHeaerSmall>
          <TextHeaerSmall>프론트엔드 개발자</TextHeaerSmall>
        </div>
      </div>
      <div className="overflow-hidden h-[138px] relative ">
        <div
          style={{
            transform: `translateY(${textRefs.current[3]}%) `,
            transition: "transform 0.1s ease-out",
          }}
        >
          <TextHeaerSmall>박상현 입니다.</TextHeaerSmall>
          <TextHeaerSmall>박상현 입니다.</TextHeaerSmall>
        </div>
      </div>
    </>
  );
};

export default Intro;
