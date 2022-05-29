import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const router = useRouter();
  return (
    <HeaderStyle>
      <div className="BarsStatus-BarsiPhoneLight-background" />
      <Link href="/blogs">
        <a className="nextButton">
          <Image
            src="/images/next.png"
            alt="nextButton"
            width="34px"
            height="34px"
          />
        </a>
      </Link>
      <span className="Logo">
        <Image
          src="/images/logoWhite.png"
          alt="코인고스트"
          width="318px"
          height=" 54.7px"
        />
      </span>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 181px;
  margin: 0 0 40px;
  background: ${(props) => props.theme.colors.sign};
  position: relative;

  .BarsStatus-BarsiPhoneLight-background {
    height: 88px;
    margin: 0 0 13px;
  }
  .Logo {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .nextButton {
    left: 42px;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    cursor: pointer;
  }
`;

export default Header;
