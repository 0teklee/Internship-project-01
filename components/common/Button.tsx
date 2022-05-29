import styled from "styled-components";
import { useState, ReactNode } from "react";

interface StyledCompo {
  children: string;
  noChange?: boolean;
  offColor?: string;
  width?: string;
  fontColor?: string;
  opacity?: number;
  border?: string;
  margin?: string;
  radius?: string;
  disabled?: boolean;
  fontSize?: string;
  padding?: string;
}

interface PropsInterface extends StyledCompo {
  on: boolean;
  onClickEvent: () => void;
}

function Button({
  children,
  on,
  onClickEvent,
  noChange,
  offColor,
  width,
  fontColor,
  opacity,
  border,
  margin,
  radius,
  disabled,
  fontSize,
  padding,
}: PropsInterface) {
  const [isOn, setIsOn] = useState(on);
  return (
    <ButtonStyle
      onClick={() => {
        onClickEvent();
        noChange ? null : setIsOn((prev) => !prev);
      }}
      width={width}
      offColor={offColor}
      fontColor={fontColor}
      opacity={opacity}
      border={border}
      margin={margin}
      radius={radius}
      disabled={disabled}
      fontSize={fontSize}
      padding={padding}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<StyledCompo>`
  ${(props) => {
    if (props.margin) return `margin : ${props.margin}`;
  }};
  padding: ${(props) => (props.padding ? props.padding : "11px 26px")};
  ${(props) => {
    if (props.border) return `border : ${props.border}`;
  }};
  border-radius: ${(props) => (props.radius ? props.radius : "15px")};
  background-color: ${(props) =>
    !props.disabled
      ? props.theme.colors.sign
      : props.offColor
      ? props.offColor
      : props.theme.colors.lightGrey};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "26px")};
  text-align: center;
  color: ${(props) => (props.fontColor ? props.fontColor : "#fff")};
  cursor: pointer;
  ${(props) => {
    if (props.width) {
      return `width : ${props.width} ;`;
    } else {
      return;
    }
  }}
  ${(props) => {
    if (props.opacity) return `opacity : ${props.opacity}`;
  }};
  &:disabled {
    background-color: ${(props) =>
      props.offColor ? props.offColor : props.theme.colors.lightGrey};
    opacity: 0.5;
  }
`;
export default Button;
