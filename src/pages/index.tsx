import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '@/layout';
import { Config } from '@/utils/Config';
import { getAllPosts } from '@/utils/Content';
import { convertTo2D, createPageList } from '@/utils/Pagination';
import { Main } from '@/components/templates';
import { PostLayout } from '@/layout/PostLayout';
import { Posts, PostsProps } from '@/components/posts';

const Index = ({ galleryPosts, pagination, posts }: PostsProps) => (
  <Main
    meta={
      <Meta
        title="프론트엔드 민병찬 블로그"
        description=" 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다."
      />
    }>
    <PostLayout>
      <Posts {...{ galleryPosts, pagination, posts }} />
    </PostLayout>
  </Main>
);

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tags']);

  const pages = convertTo2D(posts, Config.pagination_size);

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;

  const pagingList = createPageList(1, maxPage, pagingIndicator);

  return {
    props: {
      galleryPosts: posts,
      posts: posts.slice(0, Config.pagination_size),
      pagination: {
        pagingList,
        maxPage: maxPage.toString(),
        currPage: '1',
        next: posts.length > Config.pagination_size ? '/page2' : '',
      },
    },
  };
};

export default Index;
