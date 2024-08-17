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

export const AboutSkill = () => (
  <ul>
    <SkillItem>
      <ContentItemLeft>
        <TextDefault size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
          Front-End
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
          DevOps
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
          Tools
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
);
