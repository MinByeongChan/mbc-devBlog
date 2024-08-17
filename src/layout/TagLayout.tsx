import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';

interface ITagItemStyle {
  itemBgColor?: string;
  itemColor?: string;
  itemWeight?: string;
}
const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search-img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const TagItemList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const TagItem = styled.li`
  float: left;
  padding: 8px 10px;
  margin: 3px 5px;
  background-color: ${(props: ITagItemStyle) => props.itemBgColor};
  color: ${(props: ITagItemStyle) => props.itemColor};
  font-weight: ${(props: ITagItemStyle) => props.itemWeight};
  border-radius: 15px;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.7;
  }
`;

interface ITag {
  name: string;
  cnt: number;
}
interface TagLayoutProps {
  tags: ITag[];
}

export const TagLayout = (props: TagLayoutProps) => {
  const { tags } = props;

  const makeColor = (cnt: number) => {
    let itemBgColor: string;
    let itemColor: string;
    let itemWeight: string;
    if (cnt >= 1 && cnt <= 5) {
      itemBgColor = color.gainsboro;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 6 && cnt <= 10) {
      itemBgColor = color.lightgrey;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 11 && cnt <= 15) {
      itemBgColor = color.darkgray;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 16) {
      itemBgColor = color.lightskyblue;
      itemColor = color.black;
      itemWeight = fontWeight.bold;
    } else {
      itemBgColor = color.darkWhite;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    }
    return [itemBgColor, itemColor, itemWeight];
  };

  return (
    <Layout>
      <TopWrapper>
        <TopText>Tags</TopText>
      </TopWrapper>
      <div>블로그에 게시된 태그 저장소입니다. 태그를 클릭하시면 관련 게시물을 볼 수 있습니다.</div>
      <TagItemList>
        {tags.map((data, index) => {
          // 태그 갯수에 따른 li 색상 설정
          const [itemBgColor, itemColor, itemWeight] = makeColor(data.cnt);

          return (
            <TagItem
              key={index}
              itemBgColor={itemBgColor}
              itemColor={itemColor}
              itemWeight={itemWeight}>
              <Link
                href={{
                  pathname: '/',
                  query: { search: `${data.name}` },
                }}>
                <span>{data.name}</span>
              </Link>
            </TagItem>
          );
        })}
      </TagItemList>
    </Layout>
  );
};
