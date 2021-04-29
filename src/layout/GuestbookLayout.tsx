import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

import TextDefault from '../components/ui/TextDefault';
import { color, fontSize } from '../utils/StyleTheme';
import useInput from '../hooks/useInput';
import CommentList from '../components/guestbook/CommentList';

interface iCommentBtnWrapper {
  secret?: boolean;
}

const Layout = styled.div(() => ({
  padding: '50px 0',
}));
const ContentLayout = styled.div(() => ({
  width: '100%',
  maxWidth: '840px',
  margin: '0 auto',
  '@media screen and (min-width: 481px) and (max-width: 1080px)': {
    maxWidth: '600px',
    padding: `0 22px`,
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '0px',
    padding: `0 22px`,
  },
}));
const CommentWriteContainer = styled.section`
  width: 100%;
  padding: 25px 30px 15px 30px;
  margin-top: 13px;
  border-radius: 20px;
  background-color: ${color.darkWhite};
`;
const CommentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ececec;
  padding-top: 15px;
  flex-wrap: wrap;
  .comment-bottom-right {
  }
`;
const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border: none;
  background-color: ${color.darkWhite};
  font-size: ${fontSize.md};
  resize: none;
  &:focus {
    outline: none;
  }
`;
const TextInput = styled.input`
  max-width: 230px;
  background-color: inherit;
  border: none;
  font-size: ${fontSize.md};
  letter-spacing: 1px;
  margin-top: 2px;
  margin-left: 8px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 0px) and (max-width: 480px) {
    max-width: 200px;
  } ;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 0px) and (max-width: 1080px) {
    max-width: 200px;
    flex-direction: column;
  } ;
`;
const CommentBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (min-width: 0px) and (max-width: 1080px) {
    width: 100%;
    justify-content: flex-end;
  } ;
`;
const CommentBtnWrapper = styled.div<iCommentBtnWrapper>`
  width: 25px;
  height: 25px;
  float: left;
  cursor: pointer;
  margin-left: 20px;
  transition: 0.2s linear;
  color: ${(props) => props.secret && color.orange};
  &:hover {
    opacity: 0.3;
  }
`;

const GuestbookLayout = () => {
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [comment, onChangeComment] = useInput('');
  const [secret, setSecret] = useState(false);

  const onClickSecret = () => {
    setSecret(!secret);
  };

  return (
    <main
      className="guestbook"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* About Layout - 시작 */}
      <Layout>
        {/* Content Layout - 시작 */}
        <ContentLayout>
          <TextDefault size="h2" weight="bold" lineHeight="h1" letterSpacing="13">
            방명록
          </TextDefault>

          <div style={{ marginTop: '13px' }}>
            <TextDefault size="xxg" weight="bold" lineHeight="lg" letterSpacing="1">
              글 남기기
            </TextDefault>

            <CommentWriteContainer>
              <TextAreaContainer
                value={comment}
                onChange={onChangeComment}
                placeholder="내용, 이름과 패스워드를 작성 후, 남기고 싶은 말을 적어주세요 : )"
              />
              <CommentBottom>
                <div>
                  <TextWrapper>
                    <span style={{ width: 70 }}>
                      <TextDefault size="md" lineHeight="md" letterSpacing="1">
                        이름
                      </TextDefault>
                    </span>
                    <TextInput
                      type="text"
                      value={name}
                      onChange={onChangeName}
                      placeholder="이름"
                    />
                  </TextWrapper>

                  <TextWrapper>
                    <span style={{ width: 70 }}>
                      <TextDefault size="md" lineHeight="md" letterSpacing="1">
                        패스워드
                      </TextDefault>
                    </span>
                    <TextInput
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      placeholder="패스워드"
                    />
                  </TextWrapper>
                </div>

                <CommentBtnContainer>
                  <CommentBtnWrapper secret={secret} style={{ marginLeft: 0 }}>
                    <FontAwesomeIcon
                      icon={secret ? faLock : faLockOpen}
                      style={{ width: 25, height: 25 }}
                      onClick={onClickSecret}
                    />
                  </CommentBtnWrapper>
                  <CommentBtnWrapper>
                    <img src="/assets/images/guestbook/write.svg" />
                  </CommentBtnWrapper>
                </CommentBtnContainer>
              </CommentBottom>
            </CommentWriteContainer>

            <CommentList />
          </div>
        </ContentLayout>
        {/* Content Layout - 끝 */}
      </Layout>
    </main>
  );
};

export default GuestbookLayout;