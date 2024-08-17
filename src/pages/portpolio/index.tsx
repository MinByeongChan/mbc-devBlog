import React from 'react';
import { Meta, PortfolioLayout } from '@/layout';
import { Main } from '@/templates/Main';

const index = () => (
  <Main meta={<Meta title="Portpolio" description="MBC Portpolio" />}>
    <PortfolioLayout />
  </Main>
);

export default index;
