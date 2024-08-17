import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: start;
`;

export const AboutExperience = () => (
  <>
    <div>
      <TextDefault size="md" weight="light" lineHeight="md">
        2021. 09 - 현재
      </TextDefault>
    </div>
    <div>
      <TextDefault size="xg" weight="bold" lineHeight="lg">
        코웨이
      </TextDefault>
      <span> </span>
      <TextDefault size="xg" lineHeight="lg">
        | 서울 (프론트엔드 개발)
      </TextDefault>
    </div>

    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 코웨이에서 제공하는 대내 및 대외 서비스 프론트엔드 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 통합회원, 통합회원 어드민 대내에서 사용하는 관리자 웹페이지 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 매칭서비스 F/E, 고객이 편리하게 렌탈할 수 있는 매칭서비스의 FE 메인 담당.
        </TextDefault>
      </ListItem>
    </ListItems>

    <div style={{ marginTop: '20px' }}>
      <TextDefault size="md" weight="light" lineHeight="md">
        2020. 02 - 2021.09
      </TextDefault>
    </div>
    <div>
      <TextDefault size="xg" weight="bold" lineHeight="lg">
        KSNET
      </TextDefault>
      <span> </span>
      <TextDefault size="xg" lineHeight="lg">
        | 서울 (WEB/APP 개발)
      </TextDefault>
    </div>

    <ListItems>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 모바일파트에서 웹앱 및 웹페이지 개발
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight="light" lineHeight="md">
          o 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원 웹 페이지 개발.
        </TextDefault>
      </ListItem>
    </ListItems>
  </>
);
