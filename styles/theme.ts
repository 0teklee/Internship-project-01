import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    sign: "#5382eb",
    lightSign: "#6f94e9",
    grey: "#6f7070",
    midGrey: "#c6c6c6",
    lightGrey: "#d9e0e9",
    black: "#2b2b2b",
  },
  displayFlex: (align = "center", justify = "center", direction = "row") => {
    return `
    display : flex;
    align-items: ${align};
    justify-content:${justify};
    flex-direction: ${direction};
    `;
  },
  lineEllipsis: (type = "nowrap") => {
    return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${type};
    word-break : break-word;
    `;
  },
  titleEllipsis: (type = "nowrap") => {
    return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${type};
    `;
  },
};
