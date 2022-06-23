import React from 'react';
import { Meta } from '../../layout/Meta';
import PortpolLayout from '../../layout/PortpolLayout';
import { Main } from '../../templates/Main';

const index = () => (
  <Main meta={<Meta title="Portpolio" description="MBC Portpolio" />}>
    <PortpolLayout />
  </Main>
);

export default index;
