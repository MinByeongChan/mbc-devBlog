import { Box, ListItem as MuiListItem, styled, Typography } from '@mui/material';

export const ListItem = styled(MuiListItem)({
  marginBottom: '32px',
});

export const TagListWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
});

export const ArticleContainer = styled('article')({
  display: 'flex',
  flexDirection: 'column',
});

export const ArticleSubTitle = styled(Typography)({
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
