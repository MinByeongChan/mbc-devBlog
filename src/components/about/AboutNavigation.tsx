import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Color, spacing } from '@/utils/StyleTheme';
import { Anchor } from '@/components/ui/Anchor';
import TextDefault from '@/components/ui/TextDefault';

const Container = styled.ul({
  position: 'fixed',
  right: spacing(4),
});

const AnimContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
});

const AnimTest = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${Color.DarkBlack};
  cursor: pointer;
  animation-duration: 1s;
  animation-name: test;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  transition: 0.6s cubic-bezier(0.36, 0, 0.66, -0.56);
  @keyframes test {
    from {
      border-radius: 20%;
      height: 10%;
    }
    to {
      border-radius: 50%;
      height: 100%;
    }
  }
`;

const AboutNavigationUl = styled.ul({
  backgroundColor: Color.White,
  padding: spacing(2),
  borderRadius: spacing(1),
});

const AboutNavigationLi = styled.li({
  color: Color.Orange,
  '&:hover': {
    opacity: 0.6,
    textDecoration: 'underline',
  },
});
export const AboutNavigation = () => {
  const animRef = useRef<HTMLDivElement | null>(null);
  return (
    <Container>
      {/* <AnimContainer>
        <AnimTest />
      </AnimContainer> */}

      <AboutNavigationUl>
        <AboutNavigationLi>
          <TextDefault size="md" lineHeight="md">
            <Anchor id="introduction">소개</Anchor>
          </TextDefault>
        </AboutNavigationLi>
        <AboutNavigationLi>
          <TextDefault size="md" lineHeight="md">
            <Anchor id="skill">기술스택</Anchor>
          </TextDefault>
        </AboutNavigationLi>
        <AboutNavigationLi>
          <TextDefault size="md" lineHeight="md">
            <Anchor id="experience">경력</Anchor>
          </TextDefault>
        </AboutNavigationLi>
        <AboutNavigationLi>
          <TextDefault size="md" lineHeight="md">
            <Anchor id="project">소개</Anchor>
          </TextDefault>
        </AboutNavigationLi>
        <AboutNavigationLi>
          <TextDefault size="md" lineHeight="md">
            <Anchor id="education">학력사항</Anchor>
          </TextDefault>
        </AboutNavigationLi>
      </AboutNavigationUl>
    </Container>
  );
};
