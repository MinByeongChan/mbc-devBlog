import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AboutNavigation } from '@/components/about';

const AboutArticle = styled.article({
  width: '100%',
  height: '100%',
  padding: '50px 0',
});
const ContentLayout = styled.div(() => ({
  width: '100%',
  maxWidth: '840px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    minWidth: '600px',
    padding: '0 22px',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '0px',
    padding: '0 22px',
  },
}));

interface AboutLayoutProps extends PropsWithChildren {}

const AboutLayout = ({ children }: AboutLayoutProps) => (
  <AboutArticle className="about">
    <AboutNavigation />
    <ContentLayout>{children}</ContentLayout>
  </AboutArticle>
);

export default AboutLayout;
