import {
  ArticleContainer,
  ArticleSubTitle,
  ListItem,
  TagListWrapper,
} from '@/components/blog/BlogList/BlogList.style';
import { BlogListItem } from '@/types';
import { Color } from '@/utils/StyleTheme';
import { Box, List, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

interface BlogContentListProps {
  listItem: BlogListItem[];
}

export function BlogList({ listItem }: BlogContentListProps) {
  return (
    <List>
      {listItem.map((data) => (
        <ListItem key={data.id}>
          <ArticleContainer>
            <Typography color="textSecondary">{dayjs(data.date).format('MMMM D, YYYY')}</Typography>
            <Box mt="8px">
              <Typography variant="h5" fontWeight="700">
                {data.title}
              </Typography>
            </Box>
            <TagListWrapper>
              {data.tags?.map((tag) => (
                <Typography key={tag} color={Color.Deeppink}>
                  {tag}
                </Typography>
              ))}
            </TagListWrapper>
            <Box mt="8px">
              <ArticleSubTitle variant="subtitle1">{data.description}</ArticleSubTitle>
            </Box>
          </ArticleContainer>
        </ListItem>
      ))}
    </List>
  );
}
