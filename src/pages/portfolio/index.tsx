import React from 'react';
import { Meta } from '@/layout';
import { Main } from '@/components/templates';
import { Banner } from '@/components/portfolio/Banner';
import { Introduction } from '@/components/portfolio/Introduction';
import { Strength } from '@/components/portfolio/Strength';
import { Stack } from '@/components/portfolio/Stack';
import { Career } from '@/components/portfolio/Career';
import { Footer } from '@/components/portfolio/Footer';
import { GetStaticProps } from 'next';
import { getAllPortfolio } from '@/components/portfolio/CareerDetails';
import { PortfolioDetails } from '@/types';

interface PortfolioProps {
  portfolioDetails: PortfolioDetails[];
}

const index = ({ portfolioDetails }: PortfolioProps) => {
  return (
    <Main
      useNav={false}
      useFooter={false}
      meta={<Meta title="Frontend developer" description="Frontend developer 민병찬" />}>
      <Banner />
      <Introduction />
      <Strength />
      <Stack />
      <Career careerDetails={portfolioDetails} />
      <Footer />
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const portfolioDetails = getAllPortfolio();
  return {
    props: {
      portfolioDetails,
    },
  };
};

export default index;
