import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { color, fontSize, fontWeight } from '@/utils/StyleTheme';
import { Footer, NavigationBar } from '@/components/templates';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const LayoutMain = styled.main`
  min-height: 650px;
`;

const BottomWrapper = styled.footer`
  background-color: ${color.black};
  padding: 60px 30px;
  color: ${color.white};
  a {
    color: ${color.orange};
    font-weight: ${fontWeight.bold};
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    padding: 40px 20px;
  }
`;
const BottomContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BottomContentTitle = styled.div`
  margin-bottom: 20px;
  .footer-title {
    margin: 0 0 10px 0;
    font-size: ${fontSize.xg};
    font-weight: ${fontWeight.bold};
  }
  .footer-subtitle {
    margin: 0;
    font-size: ${fontSize.sm};
  }
`;

const BottomContentMid = styled.div`
  .mid-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .left-img {
    width: 22px;
    height: auto;
  }
  a {
    font-size: ${fontSize.sm};
    margin-left: 15px;
  }
`;

const BottomContentEnd = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Main = (props: MainProps) => (
  <>
    {props.meta}
    <section>
      <NavigationBar />
      <LayoutMain>{props.children}</LayoutMain>
      <Footer />
    </section>
  </>
);

export { Main };
