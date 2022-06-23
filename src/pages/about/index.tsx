import React from 'react';

import AboutLayout from '../../layout/AboutLayout';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="MBC About" />}>
    <AboutLayout />
  </Main>
);

export default About;
