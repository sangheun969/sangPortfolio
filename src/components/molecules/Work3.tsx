import React from "react";
import { MediaWeb } from "../../image/index";
import Button from "../atoms/Button";
import { motion } from "framer-motion";
const Work3: React.FC = () => {
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
        <div className="flex flex-col gap-10">
          <p className="text-[50px] font-['Tenada']">MediaRoad</p>
          <ul className="font-['Tenada']">
            <li>(주)MEDIA ROAD 홍보 WEB 페이지</li>
          </ul>
          <div className="flex flex-row gap-6">
            <Button variant="icontBtn" size="md" label="Detail" />
            <Button variant="icontBtn" size="md" label="Web" />
          </div>
        </div>
        <div className="w-[600px] h-[300px]">
          <img src={MediaWeb} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Work3;
