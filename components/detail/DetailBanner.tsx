import Image from "next/image";
import styled from "styled-components";
import swr from "swr";

function DetailBanner({ url }: { url: string }) {
  return (
    <DetailBannerWrapper>
      <Image
        src={url ? url : "/images/footerBanner.jpg"}
        height="150px"
        width="750px"
        alt="footer 배너"
      />
    </DetailBannerWrapper>
  );
}

const DetailBannerWrapper = styled.div`
  width: 100%;
`;

export default DetailBanner;
