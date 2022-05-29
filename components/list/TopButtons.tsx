import React from "react";
import styled from "styled-components";
import ImgButton from "./ImgButton";

interface PropsInterFace {
  all: boolean;
  likes: boolean;
  setButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TopButtons = ({ all, likes, setButton }: PropsInterFace) => {
  return (
    <Container>
      <ImgButton
        text="글쓰기"
        on={true}
        noChange={true}
        onClickEvent={() => {}}
      />
      <FilterWrapper>
        <ButtonWrapper
          disabled={all}
          //TODO check 더 좋은 방법이 있을꺼 같아요
          onClick={(e) => setButton(e)}
          id="all"
        >
          전체글
        </ButtonWrapper>
        <ButtonWrapper
          disabled={likes}
          //TODO check 더 좋은 방법이 있을꺼 같아요
          onClick={(e) => setButton(e)}
          id="likes"
        >
          인기글
        </ButtonWrapper>
      </FilterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 75px;
  padding: 0 3px;
  border-radius: 32.5px;
  background: #f0f6fd;
`;

const ButtonWrapper = styled.button<{ disabled: boolean }>`
  padding: 14px 20px;
  border-radius: 32.5px;
  font-size: 26px;
  color: ${(props) => (props.disabled ? "#fff" : "inherit")};
  background: ${(props) =>
    props.disabled ? props.theme.colors.sign : "inherit"};
  transition: 0.3s;
`;
