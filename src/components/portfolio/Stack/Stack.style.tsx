import { Box, List, styled, Typography } from '@mui/material';

export const StackBackGroundContainer = styled(Box)({
  backgroundColor: '#1E293B',
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

export const StackCardList = styled(List)({
  width: '100%',
  padding: '24px 16px',
});
export const StackCardItem = styled(Box)({
  width: '100%',
  backgroundColor: '#F7F5F2',
  borderRadius: '10px',
  boxShadow: '0px 0px 12px 3px rgba(0, 0, 0, 0.5)',
  margin: '16px 40px',
  padding: '24px 16px',
});

export const StackCardImageBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export const StackCardTextBox = styled(Box)({
  marginTop: '16px',
});
