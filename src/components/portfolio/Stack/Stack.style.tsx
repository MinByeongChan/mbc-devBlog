import { Box, styled, Typography } from '@mui/material';

export const StackBackGroundContainer = styled(Box)({
  backgroundColor: '#EDEDED',
  gridColumn: '1 / span 12',
  minHeight: '300px',
  padding: '40px 80px',
});

export const StackContentTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'white',
  textShadow: `7px 7px 0 #ff5500`,
});

export const StackCardWrapper = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 0px 12px 3px rgba(0, 0, 0, 0.5)',
  minHeight: '300px',
  margin: '24px 40px',
  padding: '24px 16px',
});
