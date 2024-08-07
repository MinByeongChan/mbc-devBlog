import styled from '@emotion/styled';
import React from 'react';
import TextDefault from '../ui/TextDefault';

const ListItems = styled.ul`
  padding-left: 10px;
`;
const ListItem = styled.li`
  display: flex;
  align-items: start;
`;

const EduCompo = () => {
  return (
    <>
      <ListItems>
        <ListItem>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 2020.03 ~ 2020.02 성결대학교 정보통신공학부 전공
          </TextDefault>
        </ListItem>
        <ListItem>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 2020.05 정보처리기사 자격증 취득
          </TextDefault>
        </ListItem>
        <ListItem>
          <TextDefault size="md" weight="light" lineHeight="md">
            o 2019.12 ~ 2020.03 IT동아리 넥스터즈 16기 개발자 활동
          </TextDefault>
        </ListItem>
      </ListItems>
    </>
  );
};

export default EduCompo;
