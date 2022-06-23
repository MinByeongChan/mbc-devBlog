import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

// https://play.google.com/store/apps/details?id=kr.co.ksnet.ksta
const ProjectCompo = () => (
  <>
    <ProjTop>
      <TextDefault size="md" weight="light" lineHeight="md">
        2022.04 – 현재
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight="bold" lineHeight="xg">
      코디매칭 서비스
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 코웨이 코디매칭 서비스 F/E 담당
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 기술스택: React.js, Typescript, React-Query, jotai, vite
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight="bold" lineHeight="md" color="lightBlue">
        <HoverLink href="https://matching.coway.com/">매칭서비스 링크</HoverLink>
      </TextDefault>
    </div>

    <ProjTop>
      <TextDefault size="md" weight="light" lineHeight="md">
        2021.11 – 2022.02
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight="bold" lineHeight="xg">
      통합회원 어드민
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 코웨이 대내 회원 서비스의 어드민 F/E 담당
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 기술스택: React.js, Typescript, Redux(RTK / redux-thunk), CRA
        </TextDefault>
      </ListItem>
    </ListItems>

    {/* KSTA - 시작 */}
    <ProjTop>
      <TextDefault size="md" weight="light" lineHeight="md">
        2020.04 – 2021.09
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight="bold" lineHeight="xg">
      KSTA
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 프론트엔드 및 안드로이드 개발 담당
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 웹 뷰 화면 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 가맹점 매출정보 확인 API 연동 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o UI/UX 컴포넌트 개발, SPA 관련 모듈 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o JavaScript, HTML5, CSS, jQuery, AJAX Promise 패턴 사용
        </TextDefault>
      </ListItem>
    </ListItems>
    {/* KSTA - 끝 */}

    {/* 테크넷 - 시작 */}
    <ProjTop>
      <TextDefault size="md" weight="light" lineHeight="md">
        2020.11 – 2021.03
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight="bold" lineHeight="xg">
      테크넷
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 프론트엔드 개발 담당
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 사내 개발자 및 영업사원들에게 서비스관련 정보를 제공하기 위한 웹사이트
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 시스템 및 프로젝트 관련 API 연동 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 라우터 및 화면, react-spring을 적용한 애니메이션 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o Redux-Saga를 사용하여 비동기 통신 개발 및 사이드 이펙트 제어
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o JavaScript (ES6), HTML5, CSS, SCSS, React.js, Redux-Saga사용
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight="bold" lineHeight="md" color="lightBlue">
        <HoverLink href="https://technetdev.ksnet.co.kr/#/">LINK</HoverLink>
      </TextDefault>
    </div>
    {/* 테크넷 - 끝 */}

    {/* 기술블로그 - 시작 */}
    <ProjTop>
      <TextDefault size="md" weight="light" lineHeight="md">
        2021.02 – 2022.05
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight="bold" lineHeight="xg">
      기술 블로그
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 기술 자료를 기록하기 위해 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 검색, 태그, Markdown 적용, Post 기능 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o Next.js, React.js, Typescript, Redux 사용
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight="bold" lineHeight="md" color="lightBlue">
        <HoverLink href="https://minbyeongchan.github.io/">LINK</HoverLink>
      </TextDefault>
    </div>
    {/* 기술블로그 - 끝 */}
  </>
);

const ProjTop = styled.div`
  margin-top: 50px;
`;
const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  align-items: start;
`;
const HoverLink = styled.a`
  transition: 0.1s linear;
  &:hover {
    box-shadow: 0px 1px 0px;
  }
`;

export default ProjectCompo;
