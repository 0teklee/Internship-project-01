/* eslint-disable react/no-children-prop */
import styled from "styled-components";
import Button from "../common/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import { getLocationOrigin } from "next/dist/shared/lib/utils";

function NavButton() {
  const router = useRouter();

  return (
    <NavButtonStyle>
      <Link href="/blogs">
        <a>
          <Button
            children="목록"
            on={true}
            onClickEvent={() => {}}
            noChange={true}
            disabled={false}
          />
        </a>
      </Link>
      <Button
        children="URL 복사"
        on={true}
        onClickEvent={() => {
          {
            navigator.clipboard.writeText(
              `${getLocationOrigin()}${router.asPath}`
            );
            alert("주소가 복사되었습니다.");
          }
        }}
        noChange={true}
      />
    </NavButtonStyle>
  );
}

const NavButtonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export default NavButton;
