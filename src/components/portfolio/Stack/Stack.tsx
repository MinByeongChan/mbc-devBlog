import {
  StackCardItem,
  StackContentTitle,
  StackBackGroundContainer,
  StackCardList,
  StackCardImageBox,
  StackCardTextBox,
} from '@/components/portfolio/Stack';
import { ListItem, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export const Stack = () => {
  return (
    <StackBackGroundContainer className="stack">
      <StackContentTitle>Stack.</StackContentTitle>

      <StackCardList>
        <ListItem>
          <StackCardItem>
            <StackCardImageBox>
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/ts_icon.png"
                alt="ts_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/js_icon.png"
                alt="js_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/html_icon.png"
                alt="html_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/sass_icon.png"
                alt="sass_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/emotion_icon.png"
                alt="emotion_icon"
              />
            </StackCardImageBox>
            <StackCardTextBox>
              <Typography>
                기본기를 중요하게 생각합니다. 프론트엔드개발자인 만큼 기본인 JS, TS, Markup 이
                중요하다 생각하고, 꾸준히 공부하고 있습니다.
              </Typography>
            </StackCardTextBox>
          </StackCardItem>
        </ListItem>
        <ListItem>
          <StackCardItem>
            <StackCardImageBox>
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/react_icon.png"
                alt="react_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/next_icon.png"
                alt="nextjs_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/mui_icon.png"
                alt="html_icon"
              />
            </StackCardImageBox>
            <StackCardTextBox>
              <Typography>
                현재까지 react, next.js 가 추세인만큼 관련된 업무를 계속 하고싶습니다. React는 가장
                많이 사용했고, 오픈소스가 많아 커뮤니티가 방대하며, 그만큼 친숙하고 선호하는
                라이브러리입니다.
              </Typography>
            </StackCardTextBox>
          </StackCardItem>
        </ListItem>
        <ListItem>
          <StackCardItem>
            <StackCardImageBox>
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/aws_ec2_icon.png"
                alt="aws_ec2_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/aws_s3_icon.png"
                alt="aws_s3_icon"
              />
              <Image
                width={32}
                height={32}
                src="/assets/images/portfolio/aws_cloud_front_icon.png"
                alt="aws_cloud_front_icon"
              />
            </StackCardImageBox>
            <StackCardTextBox>
              <Typography>
                AWS S3, CloudFront 조합을 사용하여 배포한경험이 있습니다. 유지보수가 편리하며 배포가
                빨라 많이 자주 사용합니다. EC2 또한, 사용경험이 있습니다.
              </Typography>
            </StackCardTextBox>
          </StackCardItem>
        </ListItem>
      </StackCardList>
    </StackBackGroundContainer>
  );
};