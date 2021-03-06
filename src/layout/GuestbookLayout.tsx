import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import TextDefault from '../components/ui/TextDefault';
import { color, fontSize } from '../utils/StyleTheme';
import useInput from '../hooks/useInput';
import CommentList from '../components/guestbook/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { commentStart, selectComment } from '../modules/comment';
import { iInitState } from '../modules/saga';
import { isEmpty } from '../utils/Utility';
import { openModal } from '../modules/modal';
import { COMMENT_DELETE_MODAL, COMMENT_UPDATE_MODAL } from '../modal/ModalProviderWithKey';

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
  font-size: ${fontSize.sm};
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
  const [message, onChangeMessage] = useInput('');
  // const [secret, setSecret] = useState(false);
  const dispatch = useDispatch();

  const { list }: iInitState = useSelector((state: any) => ({
    success: state.fetchData.comment.data,
    list: state.comments.list,
  }));

  // const onClickSecret = () => {
  //   let value = !secret;
  //   if (value) {
  //     alert('????????? ???????????? ???????????????.');
  //   } else {
  //     alert('????????? ????????? ???????????????.');
  //   }
  //   setSecret(value);
  // };

  const onClickSubmit = () => {
    if (isEmpty(message)) {
      alert(`????????? ??????????????????.`);
      return;
    }
    if (isEmpty(name)) {
      alert(`????????? ??????????????????.`);
      return;
    }

    let result = isEmpty(password)
      ? confirm(`??????????????? ???????????? ?????? ???????????????.`)
      : confirm(`????????? ?????????????????????????`);
    if (!result) return;

    dispatch(
      commentStart({
        url: '002',
        payload: {
          name: name,
          message: message,
          password: password,
          // secret: secret ? '1' : '0',
        },
      }),
    );
  };

  const onClickDelete = (id: string) => {
    dispatch(
      openModal(COMMENT_DELETE_MODAL, {
        id: id,
      }),
    );
  };

  const onClickUpdate = (id: number) => {
    dispatch(selectComment(id));
    dispatch(openModal(COMMENT_UPDATE_MODAL, {}));
  };

  useEffect(() => {
    dispatch(commentStart({ url: '001' }));
  }, []);

  return (
    <main
      className="guestbook"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {/* About Layout - ?????? */}
      <Layout>
        {/* Content Layout - ?????? */}
        <ContentLayout>
          <TextDefault size="h3" weight="bold" lineHeight="h1" letterSpacing="13">
            ??? ?????????
          </TextDefault>

          <div style={{ marginTop: '13px' }}>
            {/* <TextDefault size="xxg" weight="bold" lineHeight="lg" letterSpacing="1">
              ??? ?????????
            </TextDefault> */}

            <CommentWriteContainer>
              <TextAreaContainer
                value={message}
                onChange={onChangeMessage}
                placeholder="??????, ????????? ??????????????? ?????? ???, ????????? ?????? ?????? ??????????????? : )"
              />
              <CommentBottom>
                <div>
                  <TextWrapper>
                    <span style={{ width: 70 }}>
                      <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
                        ??????
                      </TextDefault>
                    </span>
                    <TextInput
                      type="text"
                      value={name}
                      onChange={onChangeName}
                      placeholder="??????"
                    />
                  </TextWrapper>

                  <TextWrapper>
                    <span style={{ width: 70 }}>
                      <TextDefault size="sm" lineHeight="sm" letterSpacing="1">
                        ????????????
                      </TextDefault>
                    </span>
                    <TextInput
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      placeholder="????????????"
                    />
                  </TextWrapper>
                </div>

                <CommentBtnContainer>
                  {/* <CommentBtnWrapper secret={secret} style={{ marginLeft: 0 }}>
                    <FontAwesomeIcon
                      icon={secret ? faLock : faLockOpen}
                      style={{ width: 25, height: 25 }}
                      onClick={onClickSecret}
                    />
                  </CommentBtnWrapper> */}
                  <CommentBtnWrapper>
                    <img src="/assets/images/guestbook/write.svg" onClick={onClickSubmit} />
                  </CommentBtnWrapper>
                </CommentBtnContainer>
              </CommentBottom>
            </CommentWriteContainer>

            <div
              style={{
                width: '100%',
                height: '1px',
                backgroundColor: `${color.gray2}`,
                margin: '50px 0 10px 0',
              }}
            ></div>
            {Array.isArray(list) && !isEmpty(list) ? (
              <CommentList
                list={list}
                onClickDelete={onClickDelete}
                onClickUpdate={onClickUpdate}
              />
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <TextDefault size="xg" lineHeight="lg" letterSpacing="1">
                  ?????? ?????? ????????? ???????????????!
                </TextDefault>
              </div>
            )}
          </div>
        </ContentLayout>
        {/* Content Layout - ??? */}
      </Layout>
    </main>
  );
};

export default GuestbookLayout;
