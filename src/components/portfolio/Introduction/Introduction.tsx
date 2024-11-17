import { Wrapper } from '@/components/portfolio/Introduction';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Introduction = () => {
  return (
    <Wrapper className="introduction">
      <Image
        alt="소개 이미지"
        src="/assets/images/portfolio/portfolio_my.png"
        width={250}
        height={250}
      />
      <Box>
        <Typography component="span" color="black">
          꾸준함이 강점인 Javascript 개발자,&nbsp;
        </Typography>
        <Typography component="span" color="#FF5A00" fontWeight="bold">
          민병찬&nbsp;
        </Typography>
        <Typography component="span" color="black">
          입니다.
        </Typography>
      </Box>
    </Wrapper>
  );
};
