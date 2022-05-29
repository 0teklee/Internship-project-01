import styled from "styled-components";

function Title({
  title,
  size,
  color,
  margin,
  weight,
}: {
  title: string;
  size: string;
  color?: string;
  margin?: string;
  weight?: number;
}) {
  return (
    <TitleStyle size={size} color={color} margin={margin} weight={weight}>
      {title}
    </TitleStyle>
  );
}

const TitleStyle = styled.p<{
  size?: string;
  color?: string;
  margin?: string;
  weight?: number;
}>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  word-break: break-word;
  font-family: "SpoqaHanSansNeo-Bold";
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.weight ? props.weight : 700)};
  font-stretch: normal;
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
`;

export default Title;
