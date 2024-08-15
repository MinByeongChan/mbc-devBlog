import React from 'react';
import { Meta } from '../../layout/Meta';
import PortfolioLayout from '../../layout/PortfolioLayout';
import { Main } from '../../templates/Main';

const index = () => (
  <Main meta={<Meta title="Portpolio" description="MBC Portpolio" />}>
    <PortfolioLayout />
  </Main>
);

export default index;
