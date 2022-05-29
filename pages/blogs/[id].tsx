import type {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Comment from "../../components/detail/Comment";
import ListNav from "../../components/detail/ListNav";
import DetailBanner from "../../components/detail/DetailBanner";
import Content from "../../components/detail/Content";
import Profile from "../../components/detail/Profile";
import Footer from "../../components/detail/Footer";
import Title from "../../components/common/Title";
import DetailHeader from "../../components/detail/DetailHeader";
import NavButton from "../../components/detail/NavButton";

interface DataType {
  id: number;
  title: string;
  defaultThumbnail: { url: string };
  thumbnail: { url: string };
  creator: { nickName: string };
  createdAt: string;
  views: number;
  likes: number;
  comments: number;
  contents: string;
}
/* eslint-disable react-hooks/rules-of-hooks */
const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const detail: NextPage = ({
  post,
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // TODO check SWR https://swr.vercel.app/ko/docs/advanced/performance
  const router = useRouter();
  const result: DataType = post?.data?.data;
  const blogsData = blogs?.data?.data;
  const currentIndex = blogsData?.findIndex(
    (i: { id: number }) => i.id === Number(router.query.id)
  );
  const next =
    blogsData &&
    blogsData.find((el: object, i: number) => i === currentIndex + 1);

  const prev =
    blogsData &&
    blogsData.find((el: object, i: number) => i === currentIndex - 1);

  return (
    <Layout width="750px">
      <DetailHeader />
      <ContentWrapper>
        <Title title={result?.title} size="33px" margin="45px 0" />
        <Profile
          nickName={result?.creator?.nickName}
          createdAt={result?.createdAt}
          view={result?.views}
          url={result?.defaultThumbnail?.url}
        />
        <BreakLine />
        <Content content={result?.contents} />
        <NavButton />
        <DetailBanner url={result?.thumbnail?.url} />
        <Comment likes={result?.likes} comments={result?.comments} />
        <ListNav prev={prev} next={next} />
      </ContentWrapper>
      <Footer />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://api.dev.coinghost.com/blogs`);
  const data = await res.json();
  const posts = data?.data.data;
  const paths = posts.map((post: { id: number }) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetcher(
    `https://api.dev.coinghost.com/blogs/${params?.id}`
  );
  const blogs = await fetcher("https://api.dev.coinghost.com/blogs");
  return { props: { post, blogs } };
};

const ContentWrapper = styled.div`
  margin: 0 42px;
`;

const BreakLine = styled.div`
  height: 0.5px;
  background-color: ${(props) => props.theme.colors.sign};
  margin: 22.8px 0 22.8px 0;
`;

export default detail;
