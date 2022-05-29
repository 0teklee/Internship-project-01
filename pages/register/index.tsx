/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import { RegisterHeader } from "../../components/register/RegisterHeader";
import { theme } from "../../styles/theme";
import CheckBox from "../../public/data/CheckBox.json";
import Text from "../../public/data/DummyText.json";
import Button from "../../components/common/Button";

const register: NextPage = () => {
  const router = useRouter();
  interface buttonState {
    [key: string]: boolean;
  }

  const [check, setCheck] = useState<buttonState>({
    id1: false,
    id2: false,
    id3: false,
    id4: false,
  });
  const [allCheck, setAllCheck] = useState(false);

  const handleAllCheck = () => {
    setAllCheck(!allCheck);
    setCheck({
      id1: !allCheck,
      id2: !allCheck,
      id3: !allCheck,
      id4: !allCheck,
    });
  };

  const [isDisabled, setDisable] = useState(true);

  useEffect(() => {
    if (check.id1 && check.id2 && check.id3) {
      setDisable(false);
      if (check.id4) {
        setAllCheck(true);
      } else {
        setAllCheck(false);
      }
    } else {
      setDisable(true);
      setAllCheck(false);
    }
  }, [check.id1, check.id2, check.id3, check.id4]);

  return (
    <Layout>
      <RegisterHeader />
      <InnerWrapper>
        <Check>
          <div className="title" id="checkAll" onClick={handleAllCheck}>
            <span className="checkBox">
              <Image
                src={
                  allCheck
                    ? "https://cdn.zeplin.io/627863fece498c16d14814bd/assets/B9256373-D757-4137-8AA2-88CF8E82511F.svg"
                    : "https://cdn.zeplin.io/627863fece498c16d14814bd/assets/7A152D69-3DCF-4486-8F02-82A36D6667C8.svg"
                }
                alt="check-all-box"
                width={20}
                height={20}
              />
            </span>
            <p className="checkAllInfo">
              코인고스트 이용약관, 개인정보 처리방침, 이벤트 및 정보 안내
              수신(선택)에 모두 동의합니다.
            </p>
          </div>
        </Check>
        {CheckBox.map((el) => {
          return (
            <Check key={el.id}>
              <div
                className="title"
                onClick={() => {
                  setCheck({
                    ...check,
                    [`id${el.id}`]: !check[`id${el.id}`],
                  });
                }}
              >
                <span className="checkBox">
                  <Image
                    id={`id${el.id}`}
                    src={
                      check[`id${el.id}`]
                        ? "https://cdn.zeplin.io/627863fece498c16d14814bd/assets/B9256373-D757-4137-8AA2-88CF8E82511F.svg"
                        : "https://cdn.zeplin.io/627863fece498c16d14814bd/assets/20F1CE0C-F221-4304-842B-30A78571CBE0.svg"
                    }
                    alt="checkbox"
                    width={20}
                    height={20}
                  />
                </span>
                <p>{el.title}</p>
                <span className="required">({el.required})</span>
              </div>
              {el.id !== 4 ? (
                <div className="textBox">{Text[0]}</div>
              ) : (
                <div className="eventBox">{Text[1]}</div>
              )}
            </Check>
          );
        })}
        <ButtonNav>
          <Button
            children="취소"
            onClickEvent={() => router.push("/blogs")}
            disabled={true}
            on={true}
            noChange={true}
            offColor="#fff"
            fontColor={theme.colors.black}
            fontSize="16px"
            width="100%"
            margin="0px 10px 0px 0px"
            border={`1px solid ${theme.colors.black}`}
            radius="5px"
            opacity={0.5}
          />
          <Button
            children="다음"
            onClickEvent={() => router.push("/register/info")}
            on={true}
            offColor={theme.colors.lightSign}
            fontSize="16px"
            border={`1px solid ${theme.colors.lightSign}`}
            width="100%"
            radius="5px"
            opacity={isDisabled ? 0.5 : 1}
            disabled={isDisabled}
          />
        </ButtonNav>
        <Footer>
          <div>
            <span>이용약관</span>
            <span>개인정보 처리방침</span>
            <span>백서 바로가기</span>
            <span>공지사항</span>
          </div>
          <div>
            <span>coinghost@coinghost.com</span>
          </div>
        </Footer>
      </InnerWrapper>
    </Layout>
  );
};

export default register;

const InnerWrapper = styled.div`
  width: 490px;
  margin: 0 auto;
`;

const Check = styled.div`
  .title {
    padding: 25px 0 27px 0;
    ${theme.displayFlex("center", "start", "row")};
    cursor: pointer;

    .checkBox {
      margin-right: 8px;
      line-height: 0;
    }
    p {
      margin: 0;
      color: ${theme.colors.black};
      font-weight: 700;
    }

    .checkAllInfo {
      width: 462px;
    }

    .required {
      margin-left: 5px;
      color: ${theme.colors.sign};
    }
  }

  #checkAll {
    border-bottom: 1px solid ${theme.colors.midGrey};
  }

  .textBox {
    height: 110px;
    padding: 10px 8px 5px 8px;
    border: 1px solid ${theme.colors.lightGrey};
    border-radius: 3px;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.25px;
    overflow: scroll;
  }

  .eventBox {
    margin-bottom: 40px;
    font-size: 12px;
  }
`;

const ButtonNav = styled.div`
  ${theme.displayFlex()}
  margin: 40px 0 32px 0;
`;

const Footer = styled.div`
  ${theme.displayFlex("center", "center", "column")}
  margin-bottom: 23px;
  div {
    ${theme.displayFlex("space-around", "center", "row")}
    span {
      margin: 10px;
      font-size: 13px;
      font-weight: 600;
      color: ${theme.colors.grey};
      opacity: 0.5;
    }
  }
`;
