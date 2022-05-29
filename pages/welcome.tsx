/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../components/common/Layout";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { useRouter } from "next/router";

const welcome = () => {
  const router = useRouter();
  return (
    <Layout>
      <Container>
        <TitleContainer>
          <ImageContainer>
            <Image
              src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/58AA0A20-AD44-4EB7-92D5-608344F090B6-optimized.png"
              width={390}
              height={67}
              alt="logo"
            />
          </ImageContainer>
          <Title
            title="계정 및 Waller 생성 완료!"
            size="16px"
            color={theme.colors.lightSign}
          />
        </TitleContainer>

        <ImageContainer>
          <Image
            src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/CABB2E65-9EF0-4D11-A867-60C2E4243FFD.png"
            width={180}
            height={313}
            alt="coinghost"
          />
        </ImageContainer>
        <Button
          children="메인페이지로 이동"
          on={true}
          onClickEvent={() => router.push("blogs")}
          noChange={true}
          fontSize="16px"
          width="390px"
          radius="7px"
          margin="100px 0px 200px 0px"
          padding="16px 0px"
        />
      </Container>
    </Layout>
  );
};

export default welcome;

const Container = styled.div`
  margin: 0 auto;
  ${theme.displayFlex("center", "center", "column")}
`;

const TitleContainer = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  margin: 200px 0 100px 0;
  p {
    margin-top: 30px;
    font-weight: 700;
  }
`;

const ImageContainer = styled.div``;
