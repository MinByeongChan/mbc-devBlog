import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

interface LnbListProps {
  items: Record<string, number>;
}

export const LnbList = ({ items }: LnbListProps) => {
  return (
    <Box sx={{ padding: '20px', bgcolor: '#ededed', borderRadius: '8px' }}>
      <Typography variant="h6">All Posts</Typography>
      <List sx={{}}>
        {Object.entries(items).map(([title, count]) => (
          <ListItem key={title}>
            {title} ({count})
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
