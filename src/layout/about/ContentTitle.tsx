import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import TextDefault from '@/components/ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';

interface ContentTitleProps {
  title: string;
}

const TitleWrapper = styled.div`
  padding-bottom: 13px;
  margin: 70px 0 20px 0;
  border-bottom: 1px solid #9c9c9c;
`;

export const ContentTitle = ({ title }: ContentTitleProps) => {
  return (
    <>
      <TitleWrapper>
        <TextDefault size="xxg" weight={fontWeight.medium} color="orange">
          {title}
        </TextDefault>
      </TitleWrapper>
    </>
  );
};
