import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Meta, PostDetailsLayout } from '@/layout';
import { Main } from '@/components/templates';
import { getAllPosts, getPostBySlug } from '@/utils/Content';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import { color, fontSize, fontWeight } from '@/utils/StyleTheme';
import { Config } from '@/utils/Config';
import Utterances from '@/components/comment/Utterances';
import TextDefault from '@/components/ui/TextDefault';
import Markdown from '@/components/Markdown';

type PostUrl = {
  slug: string;
};

interface PostDetailsProps {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
}

const TitleContainer = styled.div`
  margin-bottom: 12px;
  .title {
    font-size: ${fontSize.h2};
    font-weight: ${fontWeight.bold};
    color: ${color.darkBlack};
  }
  .date {
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.bold};
    color: ${color.gray};
  }
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  .author-img {
    width: 30px;
    height: 30px;
    background-image: url('/assets/images/mbc_img.png');
    background-position: 50% 50%;
    background-size: cover;
    margin-right: 10px;
  }
  .author-name {
    color: ${color.darkBlack};
    font-size: ${fontSize.md};
    font-weight: ${fontWeight.bold};
  }
`;

const CommentTitleContainer = styled.div`
  margin: 50px 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.gray};
`;

function PostDetails({
  title,
  description,
  modified_date,
  content,
  date,
  image,
}: PostDetailsProps) {
  return (
    <Main
      meta={
        <Meta
          title={title}
          description={description}
          post={{
            image: image,
            date: date,
            modified_date: modified_date,
          }}
        />
      }>
      <PostDetailsLayout>
        <TitleContainer>
          <div className="title">{title}</div>
          <div className="date" style={{ marginTop: 15 }}>
            {format(new Date(date), 'LLLL d, yyyy')}
          </div>
        </TitleContainer>
        <SubTitleContainer>
          <div className="author-img" />
          <span className="author-name">{Config.author}</span>
        </SubTitleContainer>

        <Markdown content={content} />

        {/* 댓글 컨테이너 - 시작 */}
        <CommentTitleContainer>
          <TextDefault size="xg" weight={fontWeight.bold}>
            Comment
          </TextDefault>
        </CommentTitleContainer>
        {/* 댓글 컨테이너 - 시작 */}

        {/* Utterances - 시작 */}
        <Utterances repo="MinByeongChan/mbc-devBlog" theme="github-light" />
        {/* Utterances - 끝 */}
      </PostDetailsLayout>
    </Main>
  );
}

export const getStaticPaths: GetStaticPaths<PostUrl> = async () => {
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

export const getStaticProps: GetStaticProps<PostDetailsProps, PostUrl> = async ({ params }) => {
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

export default PostDetails;
