import styled from "styled-components";
import { useState, ReactNode } from "react";
import Image from "next/image";

function ImgButton({
  text,
  on,
  onClickEvent,
  noChange,
}: {
  text: ReactNode;
  on: boolean;
  onClickEvent: () => void;
  noChange?: boolean;
}) {
  const [isOn, setIsOn] = useState(on);
  return (
    <ButtonStyle
      status={isOn}
      onClick={() => {
        onClickEvent();
        noChange ? null : setIsOn((prev) => !prev);
      }}
    >
      {text}
      <div>
        <Image
          width={32}
          height={32}
          src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/C3563573-535F-4D49-BF87-0C77151EF749.png"
          alt="글쓰기"
        />
      </div>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<{ status: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 25px;
  border-radius: 26px;
  font-size: 26px;
  text-align: center;
  background-color: ${(props) =>
    props.status ? props.theme.colors.sign : props.theme.colors.grey};
  color: #fff;
  cursor: pointer;
  div {
    margin-left: 13px;
  }
`;
export default ImgButton;
