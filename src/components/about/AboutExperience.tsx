import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';
import { fontSize, fontWeight } from '@/utils/StyleTheme';
import Image from 'next/image';

const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  align-items: start;
`;
const ComponyItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const AboutExperience = () => (
  <>
    <div>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2021. 09 - 현재
      </TextDefault>
    </div>
    <div>
      <ComponyItem>
        <Image alt="coway" src="/assets/images/about/coway_logo.png" width={26} height={26} />
        <TextDefault size="xg" weight={fontWeight.bold} lineHeight="lg">
          코웨이
        </TextDefault>
        <TextDefault size="xg" lineHeight="lg">
          (서울)
        </TextDefault>
      </ComponyItem>
    </div>

    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          국내 정수기 및 생활가전 제조업 기업 코웨이에서 IT 프론트엔드 개발을 수행하고 있습니다.
          코웨이에서 구축한 통합회원, 통합회원 어드민 회원체계, 그리고 전자결제 서비스,
          코디매칭서비스, 국내배정 어드민, 미국신사업 어드민 사이트, 미국신사업 배정판과 같은
          서비스를 만들었습니다.
        </TextDefault>
      </ListItem>

      {/* <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 코웨이에서 제공하는 대내외 서비스&nbsp;
        </TextDefault>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          프론트엔드&nbsp;
        </TextDefault>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 코웨이 미국 신사업 어드민 FE 개발 &nbsp;
        </TextDefault>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 미국 신사업을 진출하기 위한 어드민 사이트 구축. 전사를 관리하는 시스템이며, 물류,
          테크니션 관리, 주문, 테크니션 배정, 시스템 등 사업부에서 관리하기 위한 모든 기능을
          제공하는 어드민 사이트 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 통합회원 FE 담당 &nbsp;
        </TextDefault>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이몰, 코웨이와 연관된 서비스를 통합하는 회원체계 서비스 개발 및 운영. 내부에서
          통합회원을 관리하는 어드민 사이트 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 매칭서비스 FE 담당 &nbsp;
        </TextDefault>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          고객이 코디와 방문판매가 아닌 온라인으로 접근하여 보다 편리하게 렌탈서비스를 제공받을 수
          있는 서비스.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 기술스택 : React18 / jotai / Recoil / TanStack Query / Redux(RTK) / Redux-Thunk / Vue3 /
          pinia / AWS S3, CloudFront, EC2
        </TextDefault>
      </ListItem> */}
    </ListItems>

    <div style={{ marginTop: '16px' }}>
      <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
        2020. 02 - 2021.09
      </TextDefault>
    </div>

    <ComponyItem>
      <Image alt="coway" src="/assets/images/about/ksnet_logo.png" width={26} height={26} />
      <TextDefault size="xg" weight={fontWeight.bold} lineHeight="lg">
        KSNET
      </TextDefault>
      <TextDefault size="xg" lineHeight="lg">
        (서울)
      </TextDefault>
    </ComponyItem>

    <ListItems>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          국내 VAN/PG 서비스를 제공하는 KSNET에서 모바일파트에서 WEB/APP 개발을 수행했습니다.
          KSNET에서 제공하는 앱인 KSTA Mobile, KSNET VAN 가맹점 매출정보 확인 앱, 사내 기술공유
          사이트인 테크넷을 만들었습니다.
        </TextDefault>
      </ListItem>
      {/* <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - KSTA Mobile 개발, KSNET VAN 가맹점 매출정보 확인 앱.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 테크넷 개발, KSNET 기술본부 개발 이슈관리 및 영업지원 웹 페이지 개발.
        </TextDefault>
      </ListItem>
      <ListItem>
        <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
          - 기술스택 : React / Redux / jQuery
        </TextDefault>
      </ListItem> */}
    </ListItems>
  </>
);
