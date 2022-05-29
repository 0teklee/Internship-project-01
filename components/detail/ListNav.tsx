import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
interface PropInter {
  id: number;
  title: string;
  createdAt: string;
}

function ListNav({ next, prev }: { next?: PropInter; prev?: PropInter }) {
  return (
    <Wrapper>
      <ListWrapper>
        {prev && (
          <NavWrapper>
            <ImgWrapper>
              <Image
                src="/images/다각형up.png"
                alt="이전글"
                width="20px"
                height="15px"
              />
            </ImgWrapper>
            <Link href={`/blogs/${prev?.id}`}>
              <Info>
                <a>
                  <p>이전글</p>
                  <p>{prev?.title}</p>
                  <p>{prev?.createdAt.toLocaleString().slice(0, 10)}</p>
                </a>
              </Info>
            </Link>
          </NavWrapper>
        )}
      </ListWrapper>
      <ListWrapper>
        {next && (
          <NavWrapper>
            <ImgWrapper>
              <Image
                src="/images/다각형down.png"
                alt="다음글"
                width="20px"
                height="15px"
              />
            </ImgWrapper>
            <Link href={`/blogs/${next?.id}`}>
              <Info>
                <a>
                  <p>다음글</p>
                  <p>{next?.title}</p>
                  <p>{next?.createdAt.slice(0, 10)}</p>
                </a>
              </Info>
            </Link>
          </NavWrapper>
        )}
      </ListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 43px;
`;
const ListWrapper = styled.div`
  &:first-child {
    border-bottom: 1px solid #d5d5d5;
  }
`;
const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 500;
  line-height: 0.91;
  letter-spacing: -0.55px;
  text-align: left;
  color: ${(props) => props.theme.colors.grey};
  cursor: pointer;
`;

const ImgWrapper = styled.div``;

const Info = styled.div`
  flex: 1;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    &:first-child {
      margin: 0px 21px 0px 9px;
    }
    &:nth-child(2) {
      flex: 1;
      width: 491px;
      padding-right: 10px;
      text-align: start;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:last-child {
    }
  }
`;
export default ListNav;
