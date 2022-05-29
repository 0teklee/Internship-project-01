import styled from "styled-components";

function MoreButton() {
  return (
    <Wrapper>
      <Dot />
      <Dot />
      <Dot />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  margin: 8px 0 0;
  background-color: #909090;
  border-radius: 100%;
`;

export default MoreButton;
