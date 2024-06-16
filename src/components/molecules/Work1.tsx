import React, { useState } from "react";
import { Naegift1 } from "../../image/index";
import Button from "../atoms/Button";
import NaegiftModal from "../atoms/NaegiftModal";
import { motion } from "framer-motion";

const Work1: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWebButtonClick = () => {
    window.open("https://nae-gift.com", "_blank");
  };
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
          <p className="text-[50px] font-['Tenada']">Naegift</p>
          <ul className="font-['Tenada']">
            <li>DID/VC 활용 기프트 바우처 발급, 저장, 검증, 폐기</li>
            <li>분산원장증명 기술 R&D와 아키텍쳐 설계</li>
            <li>내기프트 선물 및 판매 등록 서비스</li>
          </ul>
          <div className="flex flex-row gap-6">
            <Button
              variant="icontBtn"
              size="md"
              label="Detail"
              onClick={openModal}
            />
            <Button
              variant="icontBtn"
              size="md"
              label="Web"
              onClick={handleWebButtonClick}
            />
          </div>
          <div>{isModalOpen && <NaegiftModal onClose={closeModal} />}</div>
        </div>
        <div className="w-[600px] h-[300px]">
          <img src={Naegift1} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Work1;
