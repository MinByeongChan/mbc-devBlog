import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

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
          o 기술스택: React, Typescript, Redux(RTK / redux-thunk), CRA
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
          o KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 기술스택: JavaScript, HTML5, CSS, jQuery
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
          o 사내 개발자 및 영업사원들에게 서비스관련 정보를 제공하기 위한 웹사이트
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 기술스택: JavaScript (ES6), HTML5, CSS, SCSS, React, Redux-Saga
        </TextDefault>
      </ListItem>
    </ListItems>
    {/* 테크넷 - 끝 */}
  </>
);

export default ProjectCompo;
