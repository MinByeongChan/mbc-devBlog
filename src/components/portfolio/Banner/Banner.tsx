import {
  BannerContainer,
  StyledButton,
  BannerWrapper,
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
    <BannerWrapper className="banner" ref={ref}>
      <BannerContainer>
        <Typography variant="h5" color="white" gutterBottom>
          안녕하세요.
        </Typography>
        <Typography variant="h5" color="white" gutterBottom>
          Front-end Developer &nbsp;
          <span style={{ color: '#FF5A00', fontWeight: 'bold' }}>민병찬</span>&nbsp;입니다.
        </Typography>

        <StyledButton>
          <Typography variant="h5" onClick={handleClickViewButton}>
            View Career
          </Typography>
        </StyledButton>
      </BannerContainer>
    </BannerWrapper>
  );
};
