import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';

const ProjTop = styled.div`
  margin-top: 50px;
`;
const ListItems = styled.ul`
  list-style: inherit;
  margin-left: 24px;
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

export const AboutProject = () => (
  <>
    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2024.04 – 현재
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      미국 신사업 어드민, 코웨이
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 미국 신사업을 위한 내부 어드민 서비스, FE 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          주문 대시보드, 작업 리스트, 지점장 배정판, 고객용 배정판, 창고이동 화면, 출고, 회계,
          시스템 등 어드민에서 사용되는 메뉴 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          react-hook-form을 사용하여 어드민에서 사용되는 공통 컴포넌트 및 템플릿 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          기획, BE, FE 3팀과 협의하여 BE API 구조, 호출 순서, 페이지 렌더링 이슈 최적화.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코드 컨벤션 맞추어 각 팀원들이 개발하는 코드의 일관성을 맞춤.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          github 자동화 작업 진행. 깃헙 코드 오너 추가 및 허스키 스크립트 추가. github action을
          사용하여 push 전 오류있는 코드를 올라가지 않도록 함.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          React, Typescript, TanStack Query, Recoil, Mui, Styled-Component, vite, AWS EC2 사용
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://abc.coway.blue/">ABC 어드민 사이트</HoverLink>
      </TextDefault>
    </div>

    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2023.05 – 2024.04
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      통합회원 코웨이
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스. 각 서비스에 통합회원 공통
          회원가입, 계정찾기, 마이페이지 화면 제공 및 회원 마이그레이션 기능 개발. FE 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          각 회원서비스에 제공되는 마이페이지, 로그인, 계정 찾기, 회원가입 페이지 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          유닛테스트부터 통합테스트까지 개발팀 내부에서 진행하여 버그를 최소한으로 줄임.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          웹접근성 WCAG 2.1을 준수하여 부분적으로 적용하고, 다양한 사용자에게 접근하기 용이하도록
          화면 구성
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          QA에서 발견된 이슈들을 스크립트로 구성하여 테스트 및 오류가 재발하지않도록 함. 매 배포마다
          테스트코드를 같이 수정하여 현행을 유지하고자함.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          Vue 3, Typescript, Pinia, vite, SCSS, AWS(S3, CloudFront), Jest, Storybook, Cypress 사용
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://coway.com">코웨이몰 사이트</HoverLink>
      </TextDefault>
    </div>

    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2022.04 – 2023.11
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      코디매칭 서비스
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          기존 오프라인 방식에서 웹페이지를 제공하여 고객에게 보다 쉬운 렌탈방식을 제공. FE 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - SPA로 환경으로 빠른 화면전환을 제공하도록 개발. - 데이터독을 연동하여 세션 리플레이 및
          에러 트래킹을 유연하게 관리. - GA360을 적용하여 마케팅에게 유용한 정보를 제공하도록 적용.
          - CI/CD를 적용하여 쉽고 안전한 배포 방식 적용 (수동배포 스크립트 개발).
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          데이터독 RUM 연동과 cypress를 e2e 테스트코드를 작성하여 운영배포 시, 이슈발생률을 최대한
          낮추어 배포시킬 수 있도록 함.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          기존 매칭 카운팅을 setTimeout으로만 제어했던 방식을 BE와 협업하여 개선하고 매칭 안정성을
          향상 시킴.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          GA360을 적용하여 마케팅에게 유용한 정보를 제공하도록 적용.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          React.js, Typescript, TanStack Query, jotai, vite, AWS (S3, CloudFront) 사용
        </TextDefault>
      </ListItem>
    </ListItems>
    <div>
      <TextDefault size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://matching.coway.com/">매칭서비스 링크</HoverLink>
      </TextDefault>
    </div>

    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2021.11 – 2022.02
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      통합회원 어드민
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 관리자에게 관련 정보들을
          제어 및 조회할 수 있도록 제공되는 어드민 사이트. FE 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          팀 내 라이브러리 사용 접합성을 확인하기 위해 RTK, redux 최초로 도입 및 팀내 이슈 공유.
          modal provider 초기 구조 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          어드민 회원별 권한을 제어하여 각각 다른 메뉴를 접근할 수 있도록 제어하는 로직 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          React, Typescript, Redux(RTK / redux-thunk), vite, AWS (S3, CloudFront) 사용
        </TextDefault>
      </ListItem>
    </ListItems>

    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2020.04 – 2021.09
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      KSTA
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          JavaScript, HTML5, CSS, jQuery 사용
        </TextDefault>
      </ListItem>
    </ListItems>

    <ProjTop>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2020.11 – 2021.03
      </TextDefault>
    </ProjTop>
    <TextDefault size="xg" weight={fontWeight.bold} lineHeight="xg">
      테크넷
    </TextDefault>
    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          사내 개발자 및 영업사원들에게 서비스관련 정보를 제공하기 위한 웹사이트
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          JavaScript (ES6), HTML5, CSS, SCSS, React, Redux-Saga 사용
        </TextDefault>
      </ListItem>
    </ListItems>
  </>
);
