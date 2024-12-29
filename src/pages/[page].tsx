import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Meta } from '@/layout/Meta';
import { Main } from '@/components/templates';
import { Config } from '@/utils/Config';
import { getAllPosts } from '@/utils/Content';
import { convertTo2D, createPageList } from '@/utils/Pagination';
import { PostLayout } from '@/layout/PostLayout';
import { Posts, PostsProps } from '@/components/posts';

type PageUrl = {
  page: string;
};

const PaginatePosts = ({ galleryPosts, pagination, posts }: PostsProps) => {
  return (
    <Main meta={<Meta title="프론트엔드 민병찬" description="프론트엔드 민병찬 블로그" />}>
      <PostLayout>
        <Posts {...{ galleryPosts, pagination, posts }} />
      </PostLayout>
    </Main>
  );
};

export const getStaticPaths: GetStaticPaths<PageUrl> = async () => {
  const posts = getAllPosts();

  const pages = convertTo2D(posts, Config.pagination_size);

  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        // Ind starts from zero so we need to do ind + 1
        // slice(1) removes the first page so we do another ind + 1
        // the first page is implemented in index.tsx
        page: `page${ind + 2}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostsProps, PageUrl> = async ({ params }) => {
  const posts = getAllPosts();
  const pages = convertTo2D(posts, Config.pagination_size);
  const currPage = Number(params!.page.replace('page', ''));
  const currentInd = currPage - 1;

  const maxPage = pages.length;
  const pagingIndicator = Config.paging_indicator;
  const pagingList = createPageList(currPage, maxPage, pagingIndicator);

  return {
    props: {
      galleryPosts: posts,
      posts: pages[currentInd],
      pagination: {
        pagingList,
        maxPage: String(maxPage),
        currPage: String(currPage),
        next: currPage < pages.length ? `page${currPage + 1}` : '',
        previous: currPage === 2 ? '/' : `page${currPage - 1}`,
      },
    },
  };
};

export default PaginatePosts;
