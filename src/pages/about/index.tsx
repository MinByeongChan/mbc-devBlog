import React from 'react';

import AboutLayout from '@/layout/AboutLayout';
import { Main } from '@/templates/Main';
import { AboutMeta } from '@/components/about';

const About = () => (
  <Main meta={<AboutMeta />}>
    <AboutLayout />
  </Main>
);

export default About;
