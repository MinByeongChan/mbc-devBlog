import {
  BannerBackground,
  BannerContainer,
  BannerOpacity,
  StyledButton,
  Wrapper,
} from '@/components/portfolio/Banner/Banner.style';
import { Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';

export const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClickViewButton = () => {
    const $introduction = document.querySelector('.introduction');
    $introduction?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScroll = () => {
    const height = ref.current?.offsetHeight ?? 0;
    if (50 < window.scrollY && window.scrollY <= height) {
      window.removeEventListener('scroll', handleScroll);
      const $introduction = document.querySelector('.introduction');
      $introduction?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper className="banner" ref={ref}>
      <BannerBackground />
      <BannerOpacity />
      <BannerContainer>
        <Typography variant="h5" color="white" gutterBottom>
          Frontend Developer
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          안녕하세요.
          <br /> 프론트엔드 개발자 민병찬입니다.
        </Typography>
        <StyledButton>
          <Typography variant="h5" onClick={handleClickViewButton}>
            View MBC's Career
          </Typography>
        </StyledButton>
      </BannerContainer>
    </Wrapper>
  );
};
