import {
  CareerContentTitle,
  CareerBackGroundContainer,
  CareerFlexContainer,
  CareerLogoBox,
  CareerCardContainer,
  CareerCardItem,
  CareerLogoRemarkStack,
} from '@/components/portfolio/Career';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { CareerServiceInfo } from '@/components/portfolio/Career/CareerServiceInfo';

export const Career = () => {
  const cowayCareer = useMemo(() => {
    const target = dayjs('2021-09-01');
    const yearDiff = dayjs().diff(target, 'year');
    const monthDiff = dayjs().diff(target.add(yearDiff, 'year'), 'month');
    return { yearDiff, monthDiff };
  }, []);

  const ksnetCareer = useMemo(() => {
    const from = dayjs('2020-02-01');
    const to = dayjs('2021-09-01');
    const yearDiff = to.diff(from, 'year');
    const monthDiff = to.diff(from.add(yearDiff, 'year'), 'month');
    return { yearDiff, monthDiff };
  }, []);
  return (
    <CareerBackGroundContainer className="career">
      <CareerContentTitle>Career.</CareerContentTitle>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <CareerFlexContainer>
          <CareerLogoBox>
            <Image
              width={181}
              height={184}
              src="/assets/images/portfolio/coway_logo.png"
              alt="coway_logo"
            />
          </CareerLogoBox>
          <CareerLogoRemarkStack>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              (주) 코웨이
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="#5D5D5D">
              2021.09 ~ present ({cowayCareer.yearDiff}년 {cowayCareer.monthDiff}개월)
            </Typography>

            <CareerCardContainer>
              <CareerCardItem>Frontend 개발</CareerCardItem>
              <CareerCardItem>백오피스 개발</CareerCardItem>
              <CareerCardItem>B2C 개발</CareerCardItem>
            </CareerCardContainer>

            <CareerServiceInfo
              title="NECOA 어드민"
              managePeriod="2024.04 ~ present (신규 개발)"
              description="코웨이 미국 신사업에서 테크니션, 관리자, 직원이 이용하는 어드민 사이트 개발."
              serviceDescDetails={[
                '주문 대시보드, 작업 리스트, 지점장 배정판, 고객용 배정판, 창고이동 화면, 출고, 회계, 재고 시스템 등 내부 직원이 사용할 업무 프로세스 개발.',
                'react-hook-form을 사용하여 어드민에서 사용되는 공통 컴포넌트 및 템플릿 개발.',
                '기획, BE, FE 3팀과 협의하여 BE API 구조, 호출 순서, 페이지 렌더링 이슈 최적화.',
                '코드 컨벤션 맞추어 각 팀원들이 개발하는 코드의 일관성을 맞춤.',
                'github 자동화 작업 진행. 깃헙 코드 오너 추가 및 허스키 스크립트 추가. github action 을 활용하여 CI/CD 기초 틀 설계.',
                'Sentry를 이용한 모니터링 구축.',
              ]}
              serviceStack="React, Typescript, TanStack Query, Recoil, Mui, AWS EC2"
            />
            <CareerServiceInfo
              title="통합회원"
              managePeriod="2023.05 ~ 2024.04 (리팩터링 및 운영 개발)"
              description="코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스."
              serviceDescDetails={[
                '통합회원 공통 회원가입, 계정찾기, 마이페이지 화면 제공 및 회원 마이그레이션 기능 개발.',
                '각 회원서비스에 제공되는 마이페이지, 로그인, 계정 찾기, 회원가입 페이지 개발.',
                '유닛테스트부터 통합테스트까지 개발팀 내부에서 진행하여 버그를 최소한으로 줄임.',
                '웹접근성 WCAG 2.1을 준수하여 부분적으로 적용하고, 다양한 사용자에게 접근하기 용이하도록 화면 구성.',
                'QA 에서 발견된 이슈들을 스크립트로 구성하여 테스트 및 오류가 재발하지않도록 함. 매 배포마다 테스트코드를 같이 수정하여 현행을 유지하고자함.',
              ]}
              serviceStack="Vue 3, Typescript, Pinia, vite, SCSS, AWS(S3, CloudFront), Vitest, Storybook, Cypress"
            />
            <CareerServiceInfo
              title="코디매칭 서비스"
              managePeriod="2022.04 ~ 2023.11"
              description="오프라인 방식에서 웹 서비스를 제공하여 고객에게 보다 쉬운 렌탈방식을 제공."
              serviceDescDetails={[
                '기존 Vue.js 로직을 React 환경으로 마이그레이션, 중복되는 화면 및 기능을 최소화하여 성공적으로 마이그레이션 수행.',
                '데이터독 RUM 연동과 cypress 를 e2e 테스트코드를 작성하여 운영배포 시, 이슈발생률을 최대한 낮추어 배포시킬 수 있도록 함.',
                '기존 매칭 카운팅을 setTimeout 으로만 제어했던 방식을 BE와 협업하여 개선하고 매칭 안정성을 향상 시킴.',
                'GA360을 적용하여 마케팅에게 유용한 정보를 제공하도록 적용.',
                'CI/CD를 적용하여 쉽고 안전한 배포 방식 적용 (수동배포 스크립트 개발). github publishing 을 이용하여 배포노트 기록 및 버전관리되도록 설계.',
              ]}
              serviceStack="React.js, Typescript, TanStack Query, jotai, vite, AWS (S3, CloudFront)"
            />
            <CareerServiceInfo
              title="통합회원 어드민"
              managePeriod="2021.11 ~ 2022.02"
              description="코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 관리자에게 관련 정보들을 제어 및 조회할 수 있도록 제공되는 어드민 사이트."
              serviceDescDetails={[
                '팀 내 라이브러리 사용 접합성을 확인하기 위해 RTK, redux 최초로 도입 및 팀내 이슈 공유. modal provider 초기 구조 개발.',
                '어드민 회원별 권한을 제어하여 각각 다른 메뉴를 접근할 수 있도록 제어하는 로직 개발.',
                'Editor 를 커스터마이징 하여 통합회원에서 사용될 스타일을 에디터에 그대로 반영함. 사용자가 이용하기에 친숙한 UI를 사용할 수 있도록 함.',
              ]}
              serviceStack="React, Typescript, Redux(RTK / redux-thunk), vite, AWS (S3, CloudFront)"
            />
          </CareerLogoRemarkStack>
        </CareerFlexContainer>

        <CareerFlexContainer>
          <CareerLogoBox>
            <Image
              width={181}
              height={184}
              src="/assets/images/portfolio/ksnet_logo.png"
              alt="ksnet_logo"
            />
          </CareerLogoBox>
          <CareerLogoRemarkStack>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              (주) 코웨이
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="#5D5D5D">
              2020.02 ~ 2021.09 ({ksnetCareer.yearDiff}년 {ksnetCareer.monthDiff}개월)
            </Typography>

            <CareerCardContainer>
              <CareerCardItem>Frontend 개발</CareerCardItem>
              <CareerCardItem>AOS 개발</CareerCardItem>
            </CareerCardContainer>

            <CareerServiceInfo
              title="KSTA"
              managePeriod="2020.04 ~ 2021.09 (개발 및 유지보수)"
              description="KSNET VAN 가맹점의 매출 정보를 확인할 수 있도록 가맹점주들에게 제공하는 앱."
              serviceDescDetails={[
                'Android 네이티브 및 웹뷰 개발.',
                '정보계 API 연동하여 VAN 매출정보 조회 기능 개발.',
                'KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수',
              ]}
              serviceStack="JavaScript, HTML5, CSS, jQuery"
            />
          </CareerLogoRemarkStack>
        </CareerFlexContainer>
      </Box>
    </CareerBackGroundContainer>
  );
};
