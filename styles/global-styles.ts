import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${normalize}
:focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
h1, h2, h3, h4, h5, h6, p, span, a {
  margin : 0;
}
* {
  box-sizing: border-box;
  font-family : 'SpoqaHanSansNeo-Regular', 'Sans-serif';
  line-height: normal;
  letter-spacing: normal;
}
button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
    }
a {
  text-decoration: none;
  color:inherit;
}

    @font-face {
  font-family: 'SpoqaHanSansNeo-Bold';
  src: url('/asset/SpoqaHanSansNeo-Bold.ttf') format('ttf');
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}
    @font-face {
  font-family: 'SpoqaHanSansNeo-Light';
  src: url('/asset/SpoqaHanSansNeo-Light.ttf') format('ttf');
  font-style: thin;
  font-weight: 200;
  font-display: swap;
}
    @font-face {
  font-family: 'SpoqaHanSansNeo-Medium';
  src: url('/asset/SpoqaHanSansNeo-Medium.ttf') format('ttf');
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
    @font-face {
  font-family: 'SpoqaHanSansNeo-Regular';
  src: url('/asset/SpoqaHanSansNeo-Regular.ttf') format('ttf');
  font-style: normal;
  font-weight: 300;
  font-display: swap;
}

`;
