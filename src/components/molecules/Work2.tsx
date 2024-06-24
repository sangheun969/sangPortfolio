import React from "react";
import { Stacker1 } from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";

const handleWebButtonClick = () => {
  window.open("https://stacker-labs.vercel.app/", "_blank");
};

const Work2: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div className="w-full flex flex-row justify-center gap-[300px] ">
        <div className="w-[600px] h-[300px]">
          <img src={Stacker1} alt="" />
        </div>
        <div className="flex flex-col gap-10">
          <p className="text-[50px] font-['Tenada']">STACKER-LABS</p>
          <ul className="font-['Tenada']">
            <li>개발자 커뮤니티 WEB PAGE</li>
          </ul>
          <div className="flex flex-row gap-6">
            <Button variant="icontBtn" size="md" label="Detail" />
            <Button
              variant="icontBtn"
              size="md"
              label="Web"
              onClick={handleWebButtonClick}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work2;
