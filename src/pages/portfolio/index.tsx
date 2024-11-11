import React from 'react';
import { Meta, PortfolioLayout } from '@/layout';
import { Main } from '@/components/templates';
import { Banner } from '@/components/portfolio/Banner';
import { Introduction } from '@/components/portfolio/Introduction';

const index = () => (
  <Main
    meta={
      <Meta
        title="Frontend developer 민병찬 포트폴리오"
        description="Frontend developer 민병찬 포트폴리오입니다"
      />
    }>
    <Banner />
    <Introduction />

    <PortfolioLayout></PortfolioLayout>
  </Main>
);

export default index;
