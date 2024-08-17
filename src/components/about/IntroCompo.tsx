import React from 'react';
import styled from '@emotion/styled';
import TextDefault from '../ui/TextDefault';

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

const IntroCompo = () => (
  <ul>
    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        안녕하세요! {new Date().getFullYear() - 2020 + 1}년차 &nbsp;
      </TextDefault>
      <TextDefault size="md" lineHeight="md" weight="bold">
        프론트엔드 주니어 개발자&nbsp;
      </TextDefault>
      <TextDefault size="md" lineHeight="md" weight="light">
        입니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        - 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        - 팀원들과 코드로 소통할 수 있는 클린코드를 지향합니다. 최근에는 가독성 높고 유지보수성이
        좋은 코드를 짜기위해 노력하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        - 기술 트렌드를 놓치지 않는 것, 그리고 안정성 높은 코드를 지향합니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        - 개발하며 공유하고 싶은 일들을 기록하기위해 블로그를 운영하고 있습니다.
      </TextDefault>
    </IntroItem>

    <IntroItem>
      <TextDefault size="md" lineHeight="md" weight="light">
        - 아침에 일찍 일어나고 저녁에 일찍 잠듭니다. 아침 운동을 좋아하며 해야할것을 미리 끝낸 후,
        하루를 시작하는 편입니다.
      </TextDefault>
    </IntroItem>
  </ul>
);

export default IntroCompo;
