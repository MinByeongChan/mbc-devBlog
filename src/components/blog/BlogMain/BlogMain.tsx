import { FrontMatter } from '@/types';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  console.log(totalPostList);
  return <div>BlogMain</div>;
};
