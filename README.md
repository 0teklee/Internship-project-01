# 코인고스트 1차 기업 과제

## 회원가입, 리스트, 디테일 페이지 제작

### 데모 영상

**회원가입 페이지 구현**

### <img src="public/intership_01_register_1.gif">

### <img src="public/intership_01_register_2.gif">

**리스트 페이지 구현**

### <img src="public/intership_01_list.gif">

**디테일 페이지 구현**

### <img src="public/intership_01_detail.gif">

### 기술 스택

### <img src="https://img.shields.io/badge/React-61dafb?style=flatsquare&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flatsquare&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=flatsquare&logo=Next.js&logoColor=white">

### 기능 상세

#### 회원가입

- 가입하기 클릭 시 input tag 에 빈값이나 알맞지 않는 형식일 경우 에러 문구 띄어주는 기능 구현
- 인증번호 받기 API 이용해서 인증번호 받아서 인증번호 인증까지 기능 구현
- 에러 핸들링, 예외처리
- 인증완료시 휴대폰 인증하기 버튼 disabled 처리

#### 리스트

- useSWRInfinite룰 사용하여 데이터 요청을 구현
- intersection-observer를 사용하여 무한 스크롤 구현
- 좋아요 필터링 기능 구현

#### 디테일

- getStaticProps로 정적 페이지를 pre-rendering 구현
- getStaticPaths로 게시글 id를 동적으로 URL 주소 생성
