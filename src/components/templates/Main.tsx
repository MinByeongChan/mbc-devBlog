import React, { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Footer, NavigationBar } from '@/components/templates';

interface MainProps extends PropsWithChildren {
  meta: ReactNode;
}

const GridSection = styled.section`
  display: grid;
  grid: 80px 1fr auto / repeat(12, 1fr);
  container-name: section-container;
  container-type: inline-size;
`;

const Main = ({ meta, children }: MainProps) => (
  <>
    {meta}
    <GridSection>
      <NavigationBar />
      {children}
      <Footer />
    </GridSection>
  </>
);

export { Main };
