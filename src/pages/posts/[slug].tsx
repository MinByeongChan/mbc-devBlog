import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Meta } from '../../layout/Meta';
import PostLayout from '../../layout/PostLayout';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug } from '../../utils/Content';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
};

function DisplayPost(props: IPostProps) {
  return (
    <Main
      meta={
        <Meta
          title={props.title}
          description={props.description}
          post={{
            image: props.image,
            date: props.date,
            modified_date: props.modified_date,
          }}
        />
      }>
      <PostLayout
        title={props.title}
        date={props.date}
        content={props.content}
        // description={props.description}
        // image={props.image}
        // modified_date={props.modified_date}
      />
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);

  return {
    props: {
      title: post.title,
      description: post.description !== undefined ? post.description : '',
      date: post.date,
      modified_date: post.modified_date !== undefined ? post.modified_date : '',
      image: post.image !== undefined ? post.image : '',
      content: post.content || '',
    },
  };
};

export default DisplayPost;
