import { FrontMatter } from '@/types';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  return <div>BlogMain</div>;
};
