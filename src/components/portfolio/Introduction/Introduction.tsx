import {
  IntroductionAnchor,
  IntroductionDescList,
  IntroductionDescListItem,
  IntroductionFlexContainer,
  Wrapper,
} from '@/components/portfolio/Introduction';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Introduction = () => {
  return (
    <Wrapper className="introduction">
      <IntroductionFlexContainer>
        <Image
          alt="소개 이미지"
          src="/assets/images/portfolio/introduction_me.png"
          width={250}
          height={250}
        />
        <IntroductionDescList>
          <IntroductionDescListItem>
            <Typography color="black" fontWeight="bold">
              Birth.
            </Typography>
            <Typography color="black">1995.02.15</Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem>
            <Typography color="black" fontWeight="bold">
              Address.
            </Typography>
            <Typography color="black">Seoul, South Korea</Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem>
            <Typography color="black" fontWeight="bold">
              Email.
            </Typography>
            <Typography color="black">
              <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
            </Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem sx={{ marginTop: '16px' }}>
            <IntroductionAnchor href="https://mbc-dev-blog.vercel.app">Blog</IntroductionAnchor>
            <IntroductionAnchor href="https://mbc-dev-blog.vercel.app/about">
              Resume
            </IntroductionAnchor>
            <IntroductionAnchor href="https://github.com/MinByeongChan">Github</IntroductionAnchor>
          </IntroductionDescListItem>
        </IntroductionDescList>
      </IntroductionFlexContainer>
    </Wrapper>
  );
};
