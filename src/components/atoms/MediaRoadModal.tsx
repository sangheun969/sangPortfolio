import React from "react";

const MediaRoadModal: React.FC = () => {
  return (
    <div>
      <table>
        <thead>
          <th>주요 업무 및 상세역할</th>
          <th>사용언어 및 개발 환경</th>
          <th>결과</th>
          <th>참고 자료</th>
        </thead>
        <tbody>
          <tr>
            <ul>
              <li>Front-end/배포</li>
              <li>
                보일러 플레이트 지정하며 React, Typescript 코드 스타일 구조 세팅
              </li>
              <li>아토믹 패턴 UI를 작은 단위로 컴포넌트 분해 관리</li>
              <li>
                정적인 Build파일 배포를 AWS S3의 Github Actions와 Clout
                Front활용 하여 CI 구축
              </li>
              <li>ACM을 활용 SSl 인증서 발급 HTTPS 환경 구성</li>
            </ul>
          </tr>
          <tr>ul</tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default MediaRoadModal;
