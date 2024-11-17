import { Box, Button, styled } from '@mui/material';

export const BannerWrapper = styled(Box)({
  position: 'relative',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100vh',
  backgroundColor: '#393939',
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

export const StyledButton = styled(Button)({
  border: '2px solid #FF5A00',
  borderRadius: '0px',
  color: '#FF5A00',
  marginTop: '32px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF5A00',
    color: 'white',
  },
});
