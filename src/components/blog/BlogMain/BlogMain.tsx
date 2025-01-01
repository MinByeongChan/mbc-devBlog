import { BlogList } from '@/components/blog/BlogList/BlogList';
import { ArticleContainer, LnbContainer } from '@/components/blog/BlogMain/BlogMain.style';
import { LnbList } from '@/components/blog/LnbList/LnbList';
import { BlogListItem, FrontMatter } from '@/types';
import { getTagItems } from '@/utils/utils';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  const tagItems = getTagItems(totalPostList);
  const blogListItem = totalPostList.map<BlogListItem>((data) => ({
    id: data.slug,
    date: data.date,
    title: data.title,
    tags: data.tags,
    description: data.description || data.content.substring(0, 200),
  }));

  return (
    <>
      <LnbContainer>
        <LnbList items={tagItems} />
      </LnbContainer>
      <ArticleContainer>
        <BlogList listItem={blogListItem} />
      </ArticleContainer>
    </>
  );
};
