import { Box, List, ListItem, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EDEDED',
});

export const IntroductionFlexContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '80px',
});

export const IntroductionDescList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const IntroductionDescListItem = styled(ListItem)({
  gap: '16px',
});

export const IntroductionAnchor = styled('a')({
  textDecoration: 'none',
  color: '#FF5A00',
  transition: '0.2s all ease-in-out',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FF5A00',
    width: '0px',
    height: '2px',
    '&:hover': {
      width: '1000%',
      opacity: '0.5',
    },
  },
  '&:hover': {
    opacity: '0.5',
  },
});
