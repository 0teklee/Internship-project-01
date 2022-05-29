import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../styles/theme";
import Link from "next/link";

export interface DataInterface {
  id: number;
  title: string;
  creator: { nickName: string };
  createdAt: string;
  defaultThumbnail?: { url: string };
  likes?: number;
  comments?: number;
}

export const ListContent = ({
  id,
  title,
  creator,
  createdAt,
  defaultThumbnail,
  likes,
  comments,
}: DataInterface) => {
  const timeData = (arr: string) => {
    const init = new Date(arr);
    const current = new Date();
    const initTime = init.getTime();
    const currentTime = current.getTime();
    const timeDiff = currentTime - initTime;

    if (Math.floor(timeDiff / 1000 / 60) < 60) {
      return `${Math.floor(timeDiff / 1000 / 60)}분 전`;
    } else if (Math.floor(timeDiff / 1000 / 60 / 60) < 6) {
      return `${Math.floor(timeDiff / 1000 / 60 / 60)} 시간 전`;
    } else {
      return `${init.toLocaleString().slice(0, 12)} ${init
        .toISOString()
        .slice(11, 16)}`;
    }
  };

  return (
    <Container>
      <FlexDiv>
        <Wrapper>
          <Image
            src={
              defaultThumbnail?.url
                ? defaultThumbnail.url
                : "/images/profileImg.jpg"
            }
            width="130px"
            height={100}
            alt="포스팅"
          />
        </Wrapper>
        <Wrapper>
          <PostTitle>
            <Link href={`blogs/${String(id)}`}>
              <a>{title}</a>
            </Link>
          </PostTitle>
          <FlexDiv>
            <FlexDiv>
              <PostCreator>{creator?.nickName}</PostCreator>
              <PostTime>{timeData(createdAt)}</PostTime>
            </FlexDiv>
            <PostLikeView>
              <FlexDiv>
                <Wrapper>
                  <Image
                    src="/images/heart.png"
                    width={30}
                    height={30}
                    alt="heart"
                  />
                </Wrapper>
                {likes}
                <Wrapper>
                  <Image
                    src="/images/댓글.png"
                    width={30}
                    height={30}
                    alt="댓글"
                  />
                </Wrapper>
                {comments}
              </FlexDiv>
            </PostLikeView>
          </FlexDiv>
        </Wrapper>
      </FlexDiv>
    </Container>
  );
};

const Container = styled.div`
  padding: 23px 0;
  border-bottom: 1px solid #cccccc;
  font-size: 20px;
  font-family: "SpoqaHanSansNeo-Medium";
`;
const FlexDiv = styled.div`
  display: flex;
  &:nth-child(2) {
    justify-content: space-between;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  img {
    border-radius: 5px;
  }
  &:nth-child(2) {
    flex: 1;
    margin-left: 20px;
  }
  margin-right: 12px;
`;

const PostTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 450px;
  line-height: 32px;
  height: 65px;
  margin-bottom: 6px;
  font-family: "SpoqaHanSansNeo-Bold";
  font-size: 26px;
  font-weight: 500;
  ${theme.lineEllipsis("wrap")}
`;

const PostCreator = styled.div`
  width: 120px;
  margin-right: 20px;
  ${({ theme }) => theme.lineEllipsis()}
  font-weight: bold;
  color: ${(props) => props.theme.colors.sign};
`;
const PostTime = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.grey};
`;
const PostLikeView = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.sign};
`;
