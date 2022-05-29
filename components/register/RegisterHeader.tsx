import styled from "styled-components";
import Image from "next/image";
import { theme } from "../../styles/theme";
import Title from "../common/Title";

export const RegisterHeader = () => {
  return (
    <Wrapper>
      <div>
        <Image
          src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/255DAEAD-58B2-443C-BF7C-5544B673A88C.png"
          width="390px"
          height="67px"
          alt="코인고스트 로고"
        />
        <Title
          title="코인고스트 계정 및 Wallet을 생성합니다."
          color={`${theme.colors.lightSign}`}
          size="16px"
          margin="30px 0px 0px 0px"
          weight={600}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 45px 0 24.5px 0;
  border-bottom: 2px solid ${theme.colors.sign};
  text-align: center;
`;
