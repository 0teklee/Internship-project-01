import { ReactNode } from "react";
import styled from "styled-components";

const Layout = ({
  width,
  children,
}: {
  width?: string;
  children: ReactNode;
}): JSX.Element => {
  return <Wrapper width={width}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 0 auto;
`;
export default Layout;
