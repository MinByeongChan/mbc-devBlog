import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

const IntroCompo = () => (
  <ul>
    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 안녕하세요! {new Date().getFullYear() - 2020 + 1}
        년차
      </TextDefault>
      <TextDefault size="md" lineHeight="md" weight="bold">
        프론트엔드 주니어 개발자
      </TextDefault>
      <TextDefault size="md" lineHeight="md" weight="light">
        입니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 팀원들과 코드로 소통할 수 있는 클린코드를 지향합니다. 최근에는 가독성 높고 유지보수성이
        좋은 코드를 짜기위해 노력하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 기술 트렌드를 놓치지 않는 것, 그리고 기본을 중요하게 생각합니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 개발했던 것들을 정리하기 위해 개인 기술블로그 운영하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        o 직접 내려먹는 커피와 싸이클, 헬스 운동을 좋아합니다.
      </TextDefault>
    </IntroItem>
  </ul>
);

const IntroItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .intro-icon {
    display: inline;
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
  .content-icon {
    display: inline;
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
`;

export default IntroCompo;
