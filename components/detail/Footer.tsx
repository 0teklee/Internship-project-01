import Image from "next/image";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <div className="imgWrapper">
        <Image
          src="/images/코인고스트 로고 NEW 최종-03.png"
          alt="logo"
          width="207px"
          height="35px"
        />
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  display: flex;
  width: 100%;
  height: 109px;
  background: #f0f6fd;
  .imgWrapper {
    width: fit-content;
    margin: auto;
  }
`;

export default Footer;
