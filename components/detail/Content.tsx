import styled from "styled-components";

function Content({ content }: { content: string }) {
  const parse = require("html-react-parser");
  return <ContentStyle>{parse(content)}</ContentStyle>;
}
const ContentStyle = styled.div`
  width: 100%;
  margin-bottom: 45px;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.54;
  text-align: left;
  word-break: break-word;
  color: ${(props) => props.theme.colors.black};
  img {
    width: 100%;
  }
`;

export default Content;
