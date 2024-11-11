import {
  BannerBackground,
  BannerContainer,
  BannerOpacity,
  Wrapper,
} from '@/components/portfolio/Banner/Banner.style';
import { Typography } from '@mui/material';
import React from 'react';

export const Banner = () => {
  return (
    <Wrapper>
      <BannerBackground />
      <BannerOpacity />
      <BannerContainer>
        <Typography color="white" fontWeight="bold" mb={1}>
          Frontend Developer
        </Typography>
        <Typography color="white">
          안녕하세요.
          <br /> 프론트엔드 개발자 민병찬입니다.
        </Typography>
      </BannerContainer>
    </Wrapper>
  );
};
