import React from 'react';
import { Meta } from '@/layout';
import { Main } from '@/components/templates';
import { Banner } from '@/components/portfolio/Banner';
import { Introduction } from '@/components/portfolio/Introduction';
import { Strength } from '@/components/portfolio/Strength';
import { Stack } from '@/components/portfolio/Stack';

const index = () => (
  <Main
    useNav={false}
    meta={
      <Meta
        title="Frontend developer 민병찬 포트폴리오"
        description="Frontend developer 민병찬 포트폴리오입니다"
      />
    }>
    <Banner />
    <Introduction />
    <Strength />
    <Stack />
  </Main>
);

export default index;
