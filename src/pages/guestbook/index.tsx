import React from 'react';
import GuestbookLayout from '../../layout/GuestbookLayout';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const GuestBook = () => (
  <Main meta={<Meta title="방명록" description="Blog Guest book" />}>
    <GuestbookLayout />
  </Main>
);

export default GuestBook;
