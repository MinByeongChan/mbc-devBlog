import { ArticleContainer, LnbContainer } from '@/components/blog/BlogMain/BlogMain.style';
import { LnbList } from '@/components/blog/LnbList/LnbList';
import { FrontMatter } from '@/types';
import { tagItems } from '@/utils/utils';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  const items = tagItems(totalPostList);

  return (
    <>
      <LnbContainer>
        <LnbList items={items} />
      </LnbContainer>
      <ArticleContainer>Main</ArticleContainer>
    </>
  );
};
