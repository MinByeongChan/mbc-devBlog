import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Footer, NavigationBar } from '@/components/templates';

interface MainProps {
  meta: ReactNode;
  children: ReactNode;
}

const GridSection = styled.section({
  display: 'grid',
  gridTemplateRows: '70px auto 1fr',
});

const LayoutMain = styled.main`
  min-height: 650px;
`;

const Main = (props: MainProps) => (
  <>
    {props.meta}
    <GridSection>
      <NavigationBar />
      <LayoutMain>{props.children}</LayoutMain>
      <Footer />
    </GridSection>
  </>
);

export { Main };
