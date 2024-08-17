import React from 'react';
import styled from '@emotion/styled';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AboutEducation,
  AboutExperience,
  AboutIntroduction,
  AboutProject,
  AboutSkill,
} from '@/components/about';
import TextDefault from '@/components/ui/TextDefault';
import { fontSize, fontWeight } from '@/utils/StyleTheme';
import { ContentTitle } from '@/layout';

const Layout = styled.div(() => ({
  padding: '50px 0',
}));
const ContentLayout = styled.div(() => ({
  width: '100%',
  maxWidth: '840px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    minWidth: '600px',
    padding: '0 22px',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '0px',
    padding: '0 22px',
  },
}));
const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column-reverse;
    .content-item2 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
const IntroItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .intro-icon {
    display: inline;
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
  .content-icon {
    display: inline;
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
`;
const ProfileImg = styled.img`
  width: 220px;
  height: 220px;
  margin-right: 200px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    margin: 0 0 20px 0;
    width: 200px;
    height: 200px;
  }
`;
const Pre = styled.pre`
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.bold};
  margin: 0;
`;

const AboutLayout = () => (
  <main
    className="about"
    style={{
      width: '100%',
      height: '100%',
    }}>
    <Layout>
      <ContentLayout>
        <IntroWrapper>
          <ul>
            <IntroItem>
              <TextDefault size="h1" weight={fontWeight.bold} lineHeight="h1" letterSpacing="13">
                민 병 찬
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <TextDefault size="lg" weight={fontWeight.bold} color="orange" lineHeight="lg">
                Front-End Developer
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <TextDefault size="lg" lineHeight="md">
                서울시 구로구 고척동
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <TextDefault size="lg" lineHeight="md">
                <a href="tel:01077020481">(+82) 010-7702-0481</a>
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <Pre>m </Pre>
              <TextDefault size="lg" lineHeight="md">
                <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <Pre>h </Pre>
              <TextDefault size="lg" lineHeight="md">
                <a href="https://mbc-dev-blog.vercel.app">https://mbc-dev-blog.vercel.app</a>
              </TextDefault>
            </IntroItem>
            <IntroItem>
              <FontAwesomeIcon className="intro-icon" icon={faGithubSquare} />
              <TextDefault size="lg" lineHeight="md">
                <a href="https://github.com/MinByeongChan">https://github.com/MinByeongChan</a>
              </TextDefault>
            </IntroItem>
          </ul>
          <ProfileImg alt="" src="/assets/images/portfolio/profile_circle_img.png" />
        </IntroWrapper>

        <ContentTitle title="소개" />
        <AboutIntroduction />

        <ContentTitle title="기술스택" />
        <AboutSkill />

        <ContentTitle title="경력" />
        <AboutExperience />

        <ContentTitle title="프로젝트" />
        <AboutProject />

        <ContentTitle title="학력사항" />
        <AboutEducation />
      </ContentLayout>
    </Layout>
  </main>
);

export default AboutLayout;
