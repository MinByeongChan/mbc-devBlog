import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

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
const ContentItemLeft = styled.div`
  min-width: 150px;
`;

const SkillCompo = () => (
  <ul>
    {/* Front-End - 시작 */}
    <SkillItem>
      <ContentItemLeft>
        <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
          Front-End
        </TextDefault>
      </ContentItemLeft>
      <SubItems>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 언어 : JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 퍼블리싱 : HTML5 / CSS / SCSS / emotion
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 개발환경 : React.js
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 스토어 jotai / React-Query / Redux(RTK) / Redux-Saga, Redux-Thunk
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o Bundler : Webpack 5 / vite
          </TextDefault>
        </li>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o Restful API
          </TextDefault>
        </li>
      </SubItems>
    </SkillItem>
    {/* Front-End - 끝 */}

    <SkillItem>
      <ContentItemLeft>
        <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
          Infra
        </TextDefault>
      </ContentItemLeft>
      <SubItems>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o AWS(EC2, CloudFront)
          </TextDefault>
        </li>
      </SubItems>
    </SkillItem>

    {/* Mobile - 시작 */}
    <SkillItem>
      <ContentItemLeft>
        <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
          Mobile
        </TextDefault>
      </ContentItemLeft>
      <SubItems>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o Android
          </TextDefault>
        </li>
      </SubItems>
    </SkillItem>
    {/* Mobile - 끝 */}

    {/* Tools - 시작 */}
    <SkillItem>
      <ContentItemLeft>
        <TextDefault size="lg" weight="medium" color="orange" lineHeight="md">
          Tools
        </TextDefault>
      </ContentItemLeft>
      <SubItems>
        <li>
          <TextDefault size="md" weight="light" lineHeight="md">
            o Github / Slack / Zeplin / Jira
          </TextDefault>
        </li>
      </SubItems>
    </SkillItem>
    {/* Tools - 끝 */}
  </ul>
);

export default SkillCompo;
