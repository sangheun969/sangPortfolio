import React from "react";
import Button from "./Button";
interface ModalProps {
  onClose: () => void;
}

const NaegiftModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 flex justify-center flex-col items-center gap-11">
        <p className="text-white text-[70px]  font-['Tenada']">Naegift</p>
        <table className="w-[950px] y-full text-white   h-[400px]  ">
          <tr className="border-b">
            <th className="font-['Tenada'] text-[25px]">
              주요 업무 및 상세역할
            </th>
            <td className="text-white italic">
              <ul className="">
                <li className="text-[20px] ">Front-end/배포</li>
                <li>
                  보일러 플레이트 지정하며 React, Typescript 코드 스타일 구조
                  세팅
                </li>
                <li>아토믹 패턴 UI를 작은 단위로 컴포넌트 분해 관리</li>
                <li>
                  정적인 Build파일 배포를 AWS S3의 Github Actions와 Clout
                  Front활용 하여 CI 구축
                </li>
                <li>ACM을 활용 SSl 인증서 발급 HTTPS 환경 구성</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <th className="font-['Tenada'] text-[25px]">
              사용언어 및 개발 환경
            </th>
            <td className="italic">
              <ul>
                <li>FRONT-END: REACT,TYPESCRIPT,AWS</li>
                <li>BACK-END: NEST.JS, AWS</li>
                <li>SMART CONTRACT: SOLIDITY, HARDHAT</li>
                <li>SSI (DID/VC): MASCA(SNAP)/ VERAMO</li>
                <li>ESCROW: CUSTOMIZED VERSION OF ZENLAND</li>
                <li>NOTIFICATION: PUSH PROTOCOL(SNAP)</li>
              </ul>
            </td>
          </tr>

          <tr className="border-b">
            <th className="font-['Tenada'] text-[25px]">결과</th>
            <td className="italic">
              <ul>
                <li>
                  (SSI)사용자가 디지털 신원 지갑을 통해 자신의 신원정보를 소유
                  관리 할 수 있는 기술과 VC & 및 DID 서비스를 구축하기 위해
                  VC검증 가능한 CREDENTIAL 즉, 다양한 신원 정보가 누군가에 게
                  보증할 수 있는 증명 방법을 확인.
                </li>
                <li>
                  배포 과정에서 객체 스토리지 서비스 S3활용 및 버킷 생성 방식과
                  효율적인 BUILD 상태 및 메모 리 관리를 이해.
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <th className="font-['Tenada'] text-[25px]">참고 자료</th>
            <td className="italic">(주) 오스리움</td>
          </tr>
        </table>
        <div>
          <Button variant="sendBtn1" size="md" label="닫기" onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default NaegiftModal;
