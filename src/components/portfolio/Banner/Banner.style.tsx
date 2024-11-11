import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  position: 'relative',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '600px',
});

export const BannerBackground = styled(Box)({
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100%',
  backgroundImage: "url('/assets/images/portfolio/portfolio_banner.png')",
});

export const BannerOpacity = styled(Box)({
  position: 'absolute',
  top: '0',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  opacity: '0.5',
});

export const BannerContainer = styled(Box)({
  position: 'absolute',
  top: '0',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});
