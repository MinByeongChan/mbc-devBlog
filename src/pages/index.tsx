import React from 'react';

import { GetStaticProps } from 'next';

import BlogGallery, { IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Config } from '../utils/Config';
import { getAllPosts } from '../utils/Content';
import { convertTo2D, createPageList } from '../utils/Pagination';
import { Main } from '@/components/templates';

const Index: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="프론트엔드 민병찬 블로그"
        description=" 프론트엔드 개발은 바로 눈으로 볼 수 있다는 매력에 빠져 개발하고 있습니다."
      />
    }>
    <BlogGallery
      galleryPosts={props.galleryPosts}
      posts={props.posts}
      pagination={props.pagination}
    />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tags']);
  const pagination: IPaginationProps = {};

  const pages = convertTo2D(posts, Config.pagination_size);

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;

  const pagingList = createPageList(1, maxPage, pagingIndicator);

  // pagination 오브젝트 init
  pagination.pagingList = pagingList;
  pagination.maxPage = maxPage.toString();
  pagination.currPage = '1';
  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      galleryPosts: posts,
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Index;
