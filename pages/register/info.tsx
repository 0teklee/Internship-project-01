/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../../components/common/Layout";
import { RegisterHeader } from "../../components/register/RegisterHeader";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import Country from "../../public/data/Country.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface Error {
  data: {
    message: string;
  };
}

const info = () => {
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
    trigger,
  } = useForm();

  const onSubmit = <T extends {}>(data: T): void => {
    if (isValid) {
      console.log("result >>>>", data);
      let sec = 10;
      let timer = setInterval(() => {
        console.log(`${sec--}초 후 다음페이지로 넘어갑니다`);
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        router.push("/welcome");
      }, 10000);
    }
  };

  const router = useRouter();

  const [regi, setRegister] = useState(false);
  const [auth, setAuth] = useState(false);
  const [pwtype, setPwType] = useState(false);
  const [pwChecktype, setPwCheckType] = useState(false);

  const fetchRegister = async () => {
    const phone = watch("id");
    try {
      const response = await fetch(`../api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        const result = await response.json();
        setRegister(true);
        alert(`인증번호는 ${result?.data?.message}  입니다.`);
        trigger("id");
      } else {
        throw await response.json();
      }
    } catch (e) {
      const error = e as Error;
      alert(error.data?.message);
      setError("id", {
        type: "wrong number",
        message: "잘못된 번호입니다.",
      });
    }
  };

  const fetchAuth = async () => {
    const auth = watch("auth");
    try {
      const response = await fetch(`../api/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ auth }),
      });

      if (response.ok) {
        setAuth(true);
        alert(`인증되었습니다.`);
        trigger("auth");
      } else {
        throw await response.json();
      }
    } catch (e) {
      const error = e as Error;
      alert(error.data.message);
      setError("auth", {
        type: "wrong number",
        message: "잘못된 번호입니다.",
      });
    }
  };

  return (
    <Layout>
      <RegisterHeader />
      <InnerWrapper onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <div>
            <FlexDivRow>
              <InputTitle>계정 생성</InputTitle>
              <InputCaption>
                코인고스트는 개인 휴대전화 번호를 계정으로 사용합니다.
              </InputCaption>
            </FlexDivRow>
          </div>
          <Position>
            <SelectStyle
              defaultValue="국가"
              disabled={regi}
              {...register("country", { required: true })}
            >
              <option value="국가" defaultChecked disabled>
                국가
              </option>
              {Country.map((el) => {
                return (
                  <option key={el.id} value={el.codeNum}>
                    {`+ ${el.codeNum} ${el.country} ${el.countryCode}`}
                  </option>
                );
              })}
            </SelectStyle>
            <DownArrow>
              <Image
                src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/E55E707C-9A5F-4B72-8FF0-E7DC2CD7D549.svg"
                width={18}
                height={13}
                alt="down"
              />
            </DownArrow>
          </Position>
        </InputWrapper>
        <InputWrapper>
          <FlexDivRow>
            <InputStyle
              placeholder="전화번호 입력"
              disabled={regi}
              {...register("id", {
                required: true,
                pattern: /^[0-9]{2,3}-[0-9]{10}$/,
                setValueAs: (value: string) => {
                  return `${getValues("country")}-${value.slice(
                    1,
                    value.length
                  )}`;
                },
              })}
            />
            <FormButton
              onClick={() => {
                fetchRegister();
              }}
              disabled={regi}
            >
              인증번호 받기
            </FormButton>
          </FlexDivRow>
          {errors.id && <Invalid>형식에 맞지 않는 번호입니다.</Invalid>}
        </InputWrapper>
        <InputWrapper>
          <FlexDivRow>
            <InputStyle
              placeholder="인증번호"
              {...register("auth", { required: true })}
              disabled={auth}
            />
            <FormButton onClick={() => fetchAuth()} disabled={auth}>
              인증하기
            </FormButton>
          </FlexDivRow>
          {errors.auth && (
            <Invalid>인증번호가 틀렸습니다. 다시 시도해 주세요.</Invalid>
          )}
          {regi && (
            <AuthNotice>
              {`인증번호를 발송했습니다. 
            인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. 
            이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.`}
            </AuthNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <div>
            <InputTitle>패스워드</InputTitle>
          </div>
          <Position>
            <InputStyle
              type={pwtype ? "text" : "password"}
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern:
                  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
              })}
              onKeyUp={() => trigger("password")}
            />
            {errors.password && (
              <Invalid>
                8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.
              </Invalid>
            )}
            <DownArrow onClick={() => setPwType((prev) => !prev)}>
              {pwtype ? (
                <Image
                  src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/4BA262B3-56A7-4AC2-8E29-53B856233044-optimized.png"
                  width={21}
                  height={21}
                  alt="eye"
                />
              ) : (
                <Image
                  src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/684107E6-F229-4135-A57C-64C737EBB219.png"
                  width={21}
                  height={21}
                  alt="eye"
                />
              )}
            </DownArrow>
          </Position>
        </InputWrapper>
        <InputWrapper>
          <div>
            <InputTitle>패스워드 재확인</InputTitle>
          </div>
          <Position>
            <InputStyle
              type={pwChecktype ? "text" : "password"}
              onKeyUp={() => trigger("passwordCheck")}
              {...register("passwordCheck", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.passwordCheck && (
              <Invalid>패스워드가 일치하지 않습니다. </Invalid>
            )}
            <DownArrow onClick={() => setPwCheckType((prev) => !prev)}>
              {pwChecktype ? (
                <Image
                  src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/4BA262B3-56A7-4AC2-8E29-53B856233044-optimized.png"
                  width={21}
                  height={21}
                  alt="eye"
                />
              ) : (
                <Image
                  src="https://cdn.zeplin.io/627863fece498c16d14814bd/assets/684107E6-F229-4135-A57C-64C737EBB219.png"
                  width={21}
                  height={21}
                  alt="eye"
                />
              )}
            </DownArrow>
          </Position>
        </InputWrapper>
        <InputWrapper>
          <div>
            <InputTitle>닉네임</InputTitle>
          </div>
          <FlexDivRow>
            <InputStyle {...register("nickname", { required: true })} />
            <FormButton disabled={false}>중복확인</FormButton>
          </FlexDivRow>
          {errors.nickname && <Invalid>사용이 불가능한 닉네임입니다. </Invalid>}
        </InputWrapper>
        <InputWrapper>
          <div>
            <InputTitle>프로필 사진(선택)</InputTitle>
          </div>
          <FlexDivRow>
            <InputStyle {...register("profile_url")} />
            <FormButton disabled={false}>사진선택</FormButton>
          </FlexDivRow>
        </InputWrapper>
        <SendButton>가입하기</SendButton>
      </InnerWrapper>
    </Layout>
  );
};

export default info;

const inputCSS = `
all: unset;
box-sizing: border-box;
width: 100%;
padding: 15px;
border: 1px solid ${theme.colors.lightGrey};
border-radius: 3px;
&:focus {
  border: 1px solid ${theme.colors.sign};
}  
`;

const off = `
background: ${theme.colors.lightSign};
opacity: 0.5;
color: ${theme.colors.black};
`;

const on = `
background: ${theme.colors.sign};
color: #fff;
`;

const buttonInner = `
height: 50px;
  margin-left: 10px;
  margin-bottom: 15px;
  padding: 0px 6px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
`;

const InnerWrapper = styled.form`
  width: 490px;
  margin: 25.5px auto;
`;

const InputWrapper = styled.div`
  ${theme.displayFlex("start", "center", "column")}
  width: 100%;
  margin: 15px 0;
  div {
    width: 100%;
  }
`;

const InputStyle = styled.input`
  ${inputCSS}
  margin-bottom: 15px;
`;

const Position = styled.div`
  position: relative;
`;

const SelectStyle = styled.select`
  ${inputCSS}
  margin-bottom: 15px;
`;

const DownArrow = styled.div`
  position: absolute;
  top: 25%;
  left: 93%;
  cursor: pointer;
`;

const InputCaption = styled.p`
  font-size: 10px;
  color: ${theme.colors.grey};
`;

const FlexDivRow = styled.div`
  ${theme.displayFlex("center", "space-between", "row")}
  button {
    flex: 0 0 130px;
  }
`;

const InputTitle = styled.p`
  font-weight: 700;
  margin-bottom: 15px;
`;

const FormButton = styled.button.attrs(() => ({ type: "button" }))<{
  disabled: boolean;
}>`
  ${theme.displayFlex()}
  ${buttonInner}
  ${(props) => {
    if (!props.disabled) {
      return on;
    } else {
      return off;
    }
  }}
`;

const SendButton = styled.button`
  ${buttonInner}
  ${on}
  margin: 0 0 100px;
  width: 100%;
`;

const Invalid = styled.p`
  text-align: start;
  color: #f01a1a;
  font-size: 10px;
`;

const AuthNotice = styled.div`
  width: 350px !important;
  margin-top: 15px;
  white-space: pre-line;
  line-height: 1.5;
  font-size: 10px;
  color: ${theme.colors.lightSign};
`;
