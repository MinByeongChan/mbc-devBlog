import React from 'react';
import { Meta } from '@/layout';
import { Main } from '@/components/templates';
import { Banner } from '@/components/portfolio/Banner';
import { Introduction } from '@/components/portfolio/Introduction';
import { Strength } from '@/components/portfolio/Strength';
import { Stack } from '@/components/portfolio/Stack';
import { Career } from '@/components/portfolio/Career';
import { Footer } from '@/components/portfolio/Footer';

const index = () => (
  <Main
    useNav={false}
    useFooter={false}
    meta={<Meta title="Frontend developer" description="Frontend developer 민병찬" />}>
    <Banner />
    <Introduction />
    <Strength />
    <Stack />
    <Career />
    <Footer />
  </Main>
);

export default index;
