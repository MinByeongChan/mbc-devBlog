import React from 'react';
import { Meta, PortfolioLayout } from '@/layout';
import { Main } from '@/components/templates';
import { BlogCard, KstaCard } from '@/components/portfolio';

const index = () => (
  <Main
    meta={
      <Meta
        title="민병찬 프론트엔드 주니어 개발자"
        description="민병찬 프론트엔드 주니어 개발자 포트폴리오입니다."
      />
    }>
    <PortfolioLayout>
      <KstaCard />
      <BlogCard />
    </PortfolioLayout>
  </Main>
);

export default index;
