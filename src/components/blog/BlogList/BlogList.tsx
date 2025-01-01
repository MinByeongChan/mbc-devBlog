import { BlogListItem } from '@/types';
import { Box, List, ListItem, Typography } from '@mui/material';
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
          <Box>
            <Typography>{dayjs(data.date).format('MMMM D, YYYY')}</Typography>
            <Typography>{data.title}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
              {data.tags?.map((tag) => <Typography key={tag}>{tag}</Typography>)}
            </Box>
            <Box>
              <Typography>{data.description}</Typography>
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
