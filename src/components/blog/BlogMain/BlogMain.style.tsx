import { Box, styled } from '@mui/material';

export const BlogMainContainer = styled(Box)({
  containerName: 'blog-main-container',
  containerType: 'inline-size',
  gridColumn: 'span 12',
});

export const BlogMainLayout = styled(Box)`
  display: grid;
  min-height: 650px;
  grid-gap: 32px;
  grid-column: 2 / span 10;
  grid-template-columns: repeat(12, 1fr);

  @container blog-main-container (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 390px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
`;

export const BlogMainMargin = styled(Box)`
  margin: 0 24px;
  @container blog-main-container (max-width: 768px) {
    margin: 0 24px;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 390px) {
    margin: 0 20px;
  }
`;
