import styled from "styled-components";
import Image from "next/image";
import Title from "../common/Title";

export const ListHeader = () => {
  return (
    <Container>
      <NavWrapper>
        <Wrapper>
          <Image
            src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/E0A936BC-3E5F-41EE-80A6-3D565E26D829.svg"
            width={50}
            height={37}
            alt="햄버거"
          />
        </Wrapper>
        <Title title="블로고" size="40px" color="#5382eb" />
        <Wrapper>
          <Image
            src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/37214A11-2923-48C7-88DC-27DBC3283A70.png"
            width="39px"
            height="39px"
            alt="검색창_돋보기"
          />
        </Wrapper>
      </NavWrapper>
      <Wrapper>
        <Image
          src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/5F410F93-9555-46F2-B5BB-E351A874A9F5.png"
          width={750}
          height={170}
          alt="배너 헤더"
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div``;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 120px 0 32px 0;
`;
