import { LnbListWrapper, LnbWrapper } from '@/components/blog/LnbList/LnbList.style';
import { List, ListItem, Typography } from '@mui/material';
import React from 'react';

interface LnbListProps {
  items: Record<string, number>;
}

export const LnbList = ({ items }: LnbListProps) => {
  const tagList = Object.entries(items).sort(([, count1], [, count2]) =>
    count1 < count2 ? 1 : -1,
  );

  return (
    <LnbWrapper>
      <LnbListWrapper>
        <Typography variant="h6">All Posts</Typography>
        <List>
          {tagList.map(([title, count]) => (
            <ListItem key={title}>
              {title} ({count})
            </ListItem>
          ))}
        </List>
      </LnbListWrapper>
    </LnbWrapper>
  );
};
