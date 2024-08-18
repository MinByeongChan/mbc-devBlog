import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';

const SkillItem = styled.li`
  display: flex;
  align-items: start;
  margin-top: 10px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
const SubItems = styled.ul`
  padding-left: 10px;
`;

const SubItemGridWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'minmax(50px, 100px) auto',
  gap: '16px',
});
const ContentItemLeft = styled.div`
  min-width: 150px;
`;

const SkillDetailItems = styled.ul({
  listStyle: 'inherit',
  margin: '16px',
});

export const AboutSkill = () => (
  <div>
    <ul>
      <SkillItem>
        <ContentItemLeft>
          <TextDefault size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            프론트엔드
          </TextDefault>
        </ContentItemLeft>
        <SubItems>
          <SubItemGridWrapper>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                언어
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                퍼블리싱
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                HTML5 / CSS / SCSS / emotion / styled-component
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                개발환경
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                React18 / jotai / Recoil / TanStack Query / Redux(RTK) / Redux-Thunk / Vue3 / pinia
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                Bundler
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                Webpack / vite
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                Package
              </TextDefault>
            </div>
            <div>
              <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
                npm / yarn
              </TextDefault>
            </div>
          </SubItemGridWrapper>
        </SubItems>
      </SkillItem>

      <SkillItem>
        <ContentItemLeft>
          <TextDefault size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            데브옵스
          </TextDefault>
        </ContentItemLeft>
        <SubItems>
          <li>
            <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
              AWS EC2 / CloudFront / S3
            </TextDefault>
          </li>
        </SubItems>
      </SkillItem>

      <SkillItem>
        <ContentItemLeft>
          <TextDefault size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            그 외
          </TextDefault>
        </ContentItemLeft>
        <SubItems>
          <li>
            <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
              Github / Jira
            </TextDefault>
          </li>
        </SubItems>
      </SkillItem>
    </ul>

    <div style={{ marginTop: '16px' }}>
      <SkillDetailItems>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            React 사용하는 것을 선호합니다. 컴포넌트 공통화 및 재활용하는 것에 능숙합니다. 상태관리, 비동기 처리, 컴포넌트 로직 제어, 다양한 디자인 패턴을 익히고 적용하며 개발합니다.
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            재귀함수, 함수형 프로그래밍을 사용하여 개발하려고 합니다. SRP원칙을 준수하려고 하며
            가독성있는 코드를 작성하려고 노력합니다.
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            타입스크립트 타입 재활용 및 유틸리티 타입을 활용하여 타입을 작성하고, 유니온, 인터섹션 타입 등 활용할 수 있습니다.
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            유틸성 함수는 jest를 사용하여 테스트코드를 작성하며, QA에 많이 잡히는 이슈들에 대해서는
            cypress를 사용하여 이슈 재발하는 것을 방지하려합니다.
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            최근에는 비즈니스 로직을 스토어 및 셀렉터를 사용하여 로직을 구성합니다.
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight={fontWeight.normal} lineHeight="md">
            웹접근성 및 시맨틱 태그를 고려하여 개발합니다.
          </TextDefault>
        </li>
      </SkillDetailItems>
    </div>
  </div>
);
