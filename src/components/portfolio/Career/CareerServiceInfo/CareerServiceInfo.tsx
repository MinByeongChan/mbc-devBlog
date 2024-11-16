import {
  CareerContentTitle,
  CareerBackGroundContainer,
  CareerFlexContainer,
  CareerLogoBox,
  CareerCardContainer,
  CareerCardItem,
  CareerLogoRemarkStack,
  ServiceTitleContainer,
  ServiceTitle,
  ServiceDetailButton,
  ServiceList,
  ServiceStackBox,
  ServiceContainerBox,
} from '@/components/portfolio/Career';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

export const Career = () => {
  const cowayCareer = useMemo(() => {
    const target = dayjs('2021-09-01');
    const yearDiff = dayjs().diff(target, 'year');
    const monthDiff = dayjs().diff(target.add(yearDiff, 'year'), 'month');
    return { yearDiff, monthDiff };
  }, []);
  return (
    <CareerBackGroundContainer>
      <CareerContentTitle>Career.</CareerContentTitle>

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

          <ServiceContainerBox>
            <ServiceTitleContainer>
              <ServiceTitle variant="h6">NECOA 어드민</ServiceTitle>
              <ServiceDetailButton>Details</ServiceDetailButton>
            </ServiceTitleContainer>
            <Typography color="#5D5D5D" gutterBottom>
              2024.04 ~ present (신규 개발)
            </Typography>
            <Typography>
              코웨이 미국 신사업에서 테크니션, 관리자, 직원이 이용하는 어드민 사이트 개발.{' '}
            </Typography>

            <ServiceList>
              <li>
                <Typography>
                  주문 대시보드, 작업 리스트, 지점장 배정판, 고객용 배정판, 창고이동 화면, 출고,
                  회계, 재고 시스템 등 내부 직원이 사용할 업무 프로세스 개발.
                </Typography>
              </li>
              <li>
                <Typography>
                  react-hook-form을 사용하여 어드민에서 사용되는 공통 컴포넌트 및 템플릿 개발.
                </Typography>
              </li>
              <li>
                <Typography>
                  기획, BE, FE 3팀과 협의하여 BE API 구조, 호출 순서, 페이지 렌더링 이슈 최적화.
                </Typography>
              </li>
              <li>
                <Typography>
                  코드 컨벤션 맞추어 각 팀원들이 개발하는 코드의 일관성을 맞춤.
                </Typography>
              </li>
              <li>
                <Typography>
                  github 자동화 작업 진행. 깃헙 코드 오너 추가 및 허스키 스크립트 추가. github
                  action 을 활용하여 CI/CD 기초 틀 설계.
                </Typography>
              </li>
              <li>
                <Typography>Sentry를 이용한 모니터링 구축.</Typography>
              </li>
            </ServiceList>

            <ServiceStackBox>
              <Typography>React, Typescript, TanStack Query, Recoil, Mui, AWS EC2 </Typography>
            </ServiceStackBox>
          </ServiceContainerBox>

          <ServiceContainerBox>
            <ServiceTitleContainer>
              <ServiceTitle variant="h6">통합회원</ServiceTitle>
              <ServiceDetailButton>Details</ServiceDetailButton>
            </ServiceTitleContainer>
            <Typography color="#5D5D5D" gutterBottom>
              2023.05 ~ 2024.04 (리팩터링 및 운영 개발)
            </Typography>
            <Typography>
              코웨이 미국 신사업에서 테크니션, 관리자, 직원이 이용하는 어드민 사이트 개발.{' '}
            </Typography>

            <ServiceList>
              <li>
                <Typography>
                  주문 대시보드, 작업 리스트, 지점장 배정판, 고객용 배정판, 창고이동 화면, 출고,
                  회계, 재고 시스템 등 내부 직원이 사용할 업무 프로세스 개발.
                </Typography>
              </li>
              <li>
                <Typography>
                  react-hook-form을 사용하여 어드민에서 사용되는 공통 컴포넌트 및 템플릿 개발.
                </Typography>
              </li>
              <li>
                <Typography>
                  기획, BE, FE 3팀과 협의하여 BE API 구조, 호출 순서, 페이지 렌더링 이슈 최적화.
                </Typography>
              </li>
              <li>
                <Typography>
                  코드 컨벤션 맞추어 각 팀원들이 개발하는 코드의 일관성을 맞춤.
                </Typography>
              </li>
              <li>
                <Typography>
                  github 자동화 작업 진행. 깃헙 코드 오너 추가 및 허스키 스크립트 추가. github
                  action 을 활용하여 CI/CD 기초 틀 설계.
                </Typography>
              </li>
              <li>
                <Typography>Sentry를 이용한 모니터링 구축.</Typography>
              </li>
            </ServiceList>

            <ServiceStackBox>
              <Typography>React, Typescript, TanStack Query, Recoil, Mui, AWS EC2 </Typography>
            </ServiceStackBox>
          </ServiceContainerBox>
        </CareerLogoRemarkStack>
      </CareerFlexContainer>
    </CareerBackGroundContainer>
  );
};
