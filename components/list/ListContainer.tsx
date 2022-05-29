import { fetcher } from "../../utils/fetcher";
import useSWRInfinite from "swr/infinite";
import { ListContent } from "./ListContent";
import styled from "styled-components";
import { useInView, InView } from "react-intersection-observer";
import { theme } from "../../styles/theme";
import { FadeLoader } from "react-spinners";
import { DataInterface } from "./ListContent";

interface fetchDataInterface {
  data: {
    data: DataInterface;
    meta: {
      limit: number;
      nextPage: number;
      offset: number;
      page: number;
      prevPage: number;
      total: number;
      totalPage: number;
    };
  };
}

function ListContainer({ likes }: { likes: boolean }) {
  const getKey = (
    pageIndex: number,
    prevPageData: { data: { data: object } }
  ) => {
    let order = "";
    if (prevPageData && !prevPageData.data) {
      return null;
    }
    //TODO check
    if (likes) {
      order = "orderBy=likes&";
      //TODO check
    }
    return `https://api.dev.coinghost.com/blogs?${order}page=${
      pageIndex + 1
    }&limit=10`;
  };

  const scrollLoading = (): void => {
    if (
      !error &&
      data &&
      data[data.length - 1].data?.meta.totalPage <=
        data[data.length - 1].data?.meta.page
    ) {
      return;
    }
    setSize(size + 1);
  };

  //TODO type check
  const { data, setSize, size, error } = useSWRInfinite<
    fetchDataInterface,
    object
  >(getKey, fetcher);

  const { ref } = useInView({
    onChange: () => {
      scrollLoading();
    },
    threshold: 0,
  });

  // 컴포넌트 출력 함수
  const Dataprint = data && data.map((el) => el.data).map((el) => el.data);
  return (
    <ListWrapper>
      <div className="position">
        {!Dataprint
          ? ""
          : Dataprint.flat().map((el) => {
              return (
                <ListContent
                  id={el.id}
                  key={el.id}
                  title={el.title}
                  creator={el.creator}
                  createdAt={el.createdAt}
                  defaultThumbnail={el.defaultThumbnail}
                  likes={el.likes}
                  comments={el.comments}
                />
              );
            })}
      </div>
      {data &&
      data[data.length - 1].data?.meta.page !==
        data[data.length - 1].data?.meta.totalPage ? (
        <InView>
          <LoaderStyle ref={ref}>
            <FadeLoader color={theme.colors.sign} />
          </LoaderStyle>
        </InView>
      ) : (
        <ListTip />
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  overflow: hidden;
  touch-action: none;
  .position {
    position: relative;
  }
`;

const LoaderStyle = styled.div`
  display: block;
  height: 120px;
  margin: 30px 0;
  text-align: center;
  font-size: 90px;
  color: ${theme.colors.sign};
`;

const ListTip = styled.div`
  height: 180px;
`;
export default ListContainer;
