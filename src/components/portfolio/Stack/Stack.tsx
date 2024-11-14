import {
  StackCardWrapper,
  StackContentTitle,
  StackBackGroundContainer,
} from '@/components/portfolio/Stack';
import { List, ListItem } from '@mui/material';
import React from 'react';

export const Stack = () => {
  return (
    <StackBackGroundContainer>
      <StackContentTitle>Stack.</StackContentTitle>

      <StackCardWrapper>
        <List>
          <ListItem>1. 컴포넌트 공통화 및 재활용 하는 것에 능숙합니다</ListItem>
          <ListItem>
            2. tanstack-query을 사용하여 비동기동작을 제어할 수 있으며, recoil, jotai, redux 를
            사용하여 스토어 관리를 할 수 있습니다.
          </ListItem>
          <ListItem>3. 다양한 디자인패턴을 경험하여 프로젝트 운영관리에 능숙합니다.</ListItem>
          <ListItem>4. next.js를 사용한 경험이 있습니다.</ListItem>
        </List>
      </StackCardWrapper>
    </StackBackGroundContainer>
  );
};
