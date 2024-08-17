import React from 'react';
import { GetStaticProps } from 'next';

import { Meta, TagLayout } from '@/layout';
import { Main } from '@/templates/Main';
import { getAllPosts } from '@/utils/Content';

export interface ITag {
  name: string;
  cnt: number;
}
export type ITagProps = {
  tags: ITag[];
};

const Tags: React.FC<ITagProps> = (props: ITagProps) => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <TagLayout tags={props.tags} />
  </Main>
);

export const getStaticProps: GetStaticProps<ITagProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'description', 'slug', 'tags']);

  const tags: ITag[] = [];

  posts.forEach((post) => {
    const tagArr = post.tags;

    // tags배열 인자 검증
    if (tagArr !== undefined && Array.isArray(tagArr)) {
      tagArr.forEach((item) => {
        let idx = 0;
        // 기존 tags 배열에 tag가 있는지 검사
        const filtered = tags.find((data, index) => {
          idx = index;
          return data.name === item;
        });

        // tag가 없으면 새로운 태그 오브젝트 추가
        if (filtered === undefined) {
          tags.push({
            name: item,
            cnt: 1,
          });
        } else {
          // tag가 존재하면 기존 태그 오브젝트의 cnt 추가
          tags[idx].cnt += 1;
        }
      });
    }
  });

  // 태그 배열 정렬
  tags.sort((a, b) => b.cnt - a.cnt);

  return {
    props: {
      tags,
    },
  };
};

export default Tags;
