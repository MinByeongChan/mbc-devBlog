import styled from '@emotion/styled';
import React, { useRef } from 'react';
import TextDefault from '@/components/ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';

interface ContentTitleProps {
  title: string;
  link: string;
}

const TitleWrapper = styled.div`
  padding-bottom: 13px;
  margin: 70px 0 20px 0;
  border-bottom: 1px solid #9c9c9c;
`;

export const ContentTitle = ({ title, link }: ContentTitleProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleClickAnchor = () => {
    if (ref.current) {
      const refRect = ref.current.getBoundingClientRect().top;
      const bodyRect = document.body.getBoundingClientRect().top;
      const navRect = 66 + 16;
      const top = refRect - bodyRect - navRect;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <TitleWrapper>
        <TextDefault size="xxg" weight={fontWeight.medium} color="orange">
          <a ref={ref} href={'#' + link} onClick={handleClickAnchor}>
            {title}
          </a>
        </TextDefault>
      </TitleWrapper>
    </>
  );
};
