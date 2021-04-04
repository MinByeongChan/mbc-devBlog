import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';
import { color, fontSize, fontWeight } from '../utils/StyleTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag, faTags } from '@fortawesome/free-solid-svg-icons';
import { useRouter, withRouter } from 'next/router';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const GalleryWrapper = styled.div(() => ({
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '10px',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
}));

const GalleryItem = styled.div(() => ({
  width: '100%',
  // border: `1px solid ${color.darkBlack}`,
  color: `${color.darkBlack}`,
  padding: '25px 12px',
  '.gallery-item-title': {
    fontSize: `${fontSize.xxg}`,
  },
  '.gallery-item-desc': {
    fontSize: `${fontSize.md}`,
  },
  '.gallery-item-bottom': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: `${fontSize.sm}`,
    padding: '10px 10px 0px 0px',
  },
  '.gallery-item-tags': {
    display: 'flex',
    flexWrap:"wrap",
    marginTop:"5px",
    ".tags-img": {
      width: '15px',
      height: 'auto',
      marginRight:"3px"
    },
    ".tag-item": {
      fontSize: fontSize.sm,
      marginRight: '3px',
      "&:hover": {
        opacity: '0.7',
      }
    }
  },
}));

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

const BlogGallery: React.FC<IBlogGalleryProps> = (props: IBlogGalleryProps) => {
  const router = useRouter();
  // const [search, onChangeSearch] = useInput('');
  const [posts, setPosts] = useState(props.posts);
  const [search, setSearch] = useState(router.query.search ? router.query.search.toString() : '');

  // 검색 필드 onChange 
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searhFiltering(e.target.value);
  };

  // 검색 필터링 함수
  const searhFiltering = (value: string) => {
    let inputVal = value;
    setSearch(inputVal);

    if (inputVal.length > 0) {
      const tmp = props.posts.filter((data) => {
        const title = data.title.toString();
        const desc = data.description.toString();
        const tags = data.tag.toString();

        return (
          title.match(new RegExp(inputVal, 'i')) !== null ||
          desc.match(new RegExp(inputVal, 'i')) !== null ||
          tags.match(new RegExp(inputVal, 'i')) !== null
        );
      });

      setPosts(tmp);
    } else {
      setPosts(props.posts);
    }
  }

  useEffect(() => {
    searhFiltering(search);
  }, [])

  return (
    <Layout>
      <TopWrapper>
        <TopText>Post</TopText>
        <div>
          <input type="text" value={search} onChange={onChangeSearch} />
          <FontAwesomeIcon className="search-img" icon={faSearch} />
        </div>
      </TopWrapper>
      <GalleryWrapper>
        {posts.map((elt, index) => (
          <GalleryItem key={index}>
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a>
                <div style={{ padding: '15px 15px 20px 15px' }}>
                  <h2 className="gallery-item-title">{elt.title}</h2>
                  <div className="gallery-item-desc">{elt.description}</div>
                  <div className="gallery-item-bottom">
                    <span>{format(new Date(elt.date), 'LLL d, yyyy')}</span>
                    <span className="gallery-item-readmore">read more</span>
                  </div>
                  <div className="gallery-item-tags">
                    <FontAwesomeIcon className={'tags-img'} icon={faTags} />
                    {elt.tag.map((item, index) => (
                      <span className="tag-item" key={index}>{item}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Link>
          </GalleryItem>
        ))}
      </GalleryWrapper>

      {search.length === 0 && (
        <Pagination
          pagingList={props.pagination.pagingList}
          previous={props.pagination.previous}
          currPage={props.pagination.currPage}
          next={props.pagination.next}
        />
      )}
    </Layout>
  );
};

export default withRouter(BlogGallery);
