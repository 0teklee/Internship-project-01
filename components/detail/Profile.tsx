import Image from "next/image";
import styled from "styled-components";
import MoreButton from "./MoreButton";

interface DataInterface {
  nickName: string;
  url: string;
  view: number;
  createdAt: string;
}

function Profile({ nickName, url, view, createdAt }: DataInterface) {
  const getCreatedAt = (dateIn: string) => {
    const dateObj: Date = new Date(dateIn);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `${year}.${month}.${date} ${hours}:${minutes}`;
  };

  const dateAt = getCreatedAt(createdAt);
  return (
    <ProfileStyle>
      <Image
        src={url}
        width="100%"
        height="100%"
        alt="프로필사진"
        priority={true}
      />
      <div className="profileInfo">
        <p className="profileId">{nickName}</p>
        <div className="profileDateView">
          <span className="date">{dateAt}</span>
          <span className="view">조회수 {view}</span>
        </div>
      </div>
      <MoreButton />
    </ProfileStyle>
  );
}
const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 100%;
  }
  .profileInfo {
    flex: 1;
    margin-left: 22px;
    text-align: left;

    .profileId {
      margin: 0 0 9px 0;
      font-size: 30px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.black};
    }

    .profileDateView {
      flex: 1;
      display: flex;
      height: 30px;
      margin: 9px 0 0 1px;
      font-size: 24px;
      line-height: 1.21;
      letter-spacing: -0.6px;
      color: ${(props) => props.theme.colors.grey};
      span {
        margin-right: 14px;
      }
    }
  }
`;

export default Profile;
