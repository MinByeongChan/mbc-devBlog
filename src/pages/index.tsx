import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '@/layout';
import { getAllPosts } from '@/utils/Content';
import { Main } from '@/components/templates';
import { FrontMatter } from '@/types';
import { BlogMain } from '@/components/blog/BlogMain/BlogMain';
import { BlogMainContainer, BlogMainLayout } from '@/components/blog/BlogMain/BlogMain.style';

interface BlogPostMainProps {
  posts: FrontMatter[];
}

interface BlogPostMainGetStaticProps {
  posts: FrontMatter[];
}

const BlogPostMain = ({ posts }: BlogPostMainProps) => {
  return (
    <Main
      meta={
        <Meta
          title="프론트엔드 민병찬 블로그"
          description=" 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다."
        />
      }>
      <BlogMainContainer>
        <BlogMainLayout>
          <BlogMain totalPostList={posts} />
        </BlogMainLayout>
      </BlogMainContainer>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<BlogPostMainGetStaticProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPostMain;
