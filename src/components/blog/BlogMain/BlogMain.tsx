import { BlogList } from '@/components/blog/BlogList/BlogList';
import { ArticleContainer, LnbContainer } from '@/components/blog/BlogMain/BlogMain.style';
import { LnbList } from '@/components/blog/LnbList/LnbList';
import { BlogListItem, FrontMatter } from '@/types';
import { getTagItems } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || '';

  const tagItems = getTagItems(totalPostList);
  const blogListItem = totalPostList
    .map<BlogListItem>((data) => ({
      id: data.slug,
      date: data.date,
      title: data.title,
      tags: data.tags,
      description: data.description || data.content.substring(0, 200),
    }))
    .filter((data) => {
      if (!tag) return true;
      const lowerCaseList = data.tags?.map((data) => data.toLowerCase()) ?? [];
      return lowerCaseList.includes(tag.toLowerCase());
    });

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
