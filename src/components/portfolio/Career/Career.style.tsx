import { Box, Button, List, Stack, styled, Typography } from '@mui/material';

export const CareerBackGroundContainer = styled(Box)({
  backgroundColor: '#EDEDED',
  gridColumn: '1 / span 12',
  minHeight: '300px',
  padding: '40px 80px',
});

export const CareerContentTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'white',
  textShadow: `7px 7px 0 #ff5500`,
});

export const CareerFlexContainer = styled(List)({
  display: 'flex',
  flexDirection: 'row',
});

export const CareerLogoBox = styled(Box)({
  borderRight: '1px solid #5D5D5D',
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 48px',
});

export const CareerLogoRemarkStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 48px',
});

export const CareerCardContainer = styled(List)({
  display: 'flex',
  gap: '16px',
});

export const CareerCardItem = styled(Typography)({
  borderRadius: '10px',
  border: '1px solid #000',
  backgroundColor: '#312828',
  color: 'white',
  padding: '4px 16px',
});

export const ServiceContainerBox = styled(Box)({
  marginTop: '16px',
});

export const ServiceTitleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
  marginLeft: '16px',
});

export const ServiceTitle = styled(Typography)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-16px',
    width: '6px',
    height: '100%',
    backgroundColor: '#FF5A00',
  },
});

export const ServiceDetailButton = styled(Button)({
  borderRadius: '10px',
  textDecoration: 'none',
  border: '1px solid #000',
  backgroundColor: 'white',
  color: 'black',
  padding: '4px 16px',
});

export const ServiceList = styled('ol')({
  listStyle: 'disc',
  marginTop: '16px',
  paddingLeft: '24px',
});

export const ServiceStackBox = styled(Box)({
  border: '2px solid #FF5A00',
  borderRadius: '10px',
  marginTop: '16px',
  padding: '4px 16px',
  backgroundColor: 'rgba(255, 90, 0, 0.5)',
});
