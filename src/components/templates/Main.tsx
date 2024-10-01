import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Footer, NavigationBar } from '@/components/templates';

interface MainProps {
  meta: ReactNode;
  children: ReactNode;
}

const LayoutMain = styled.main`
  min-height: 650px;
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
