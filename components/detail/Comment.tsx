/* eslint-disable react/no-children-prop */
import styled from "styled-components";
import Image from "next/image";
import Button from "../common/Button";
import Title from "../common/Title";

function Comment({ likes, comments }: { likes: number; comments: number }) {
  return (
    <CommentWrapper>
      <CommentHeader>
        <Title title="댓글" size="31px" margin="45px 0" />
        <div className="info">
          <div>
            <Image
              src="/images/heart.png"
              alt="like"
              width="39px"
              height="39px"
              priority={true}
            />
            <span>{likes}</span>
          </div>
          <div>
            <Image
              src="/images/댓글.png"
              alt="count"
              width="39px"
              height="39px"
              priority={true}
            />
            <span>{comments}</span>
          </div>
        </div>
      </CommentHeader>
      <CommentEditor>
        <p className="userId">아이디</p>
        <textarea
          className="textArea"
          placeholder="※ 댓글에 답글이 달렸을 시 수정/삭제가 불가합니다."
        />
        <div className="position">
          <Button
            children="등록"
            on={false}
            onClickEvent={() => {}}
            noChange={true}
            disabled={true}
          />
        </div>
      </CommentEditor>
      <CommentViewer>
        <div className="noWrapper">
          <div className="img">
            <Image
              src="/images/무플아이콘.png"
              alt="무플아이콘"
              width="88px"
              height="88px"
            />
          </div>
          <span className="noComment">
            {`댓글이 없습니다. \n 첫 댓글을 적성해 보세요.`}
          </span>
        </div>
      </CommentViewer>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div``;
const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .info {
    display: flex;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    line-height: 1.06;
    letter-spacing: -0.8px;
    text-align: left;
    color: ${(props) => props.theme.colors.sign};
    span {
      margin-left: 6px;
    }
  }

  div:first-child {
    margin-right: 26px;
  }
`;
const CommentEditor = styled.div`
  padding: 22px 21px 17px 25px;
  border-radius: 15px;
  border: solid 1px ${(props) => props.theme.colors.sign};
  background-color: #fff;

  .userId {
    margin: 0;
    margin-bottom: 14px;
    object-fit: contain;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.7px;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
  }

  .textArea {
    all: unset;
    width: 100%;
    resize: none;
  }

  .position {
    text-align: right;
  }
`;
const CommentViewer = styled.div`
  .noWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 120px 0;
  }

  .noComment {
    font-size: 26px;
    line-height: 1.15;
    letter-spacing: -0.65px;
    white-space: pre-wrap;
    text-align: center;
    color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export default Comment;
