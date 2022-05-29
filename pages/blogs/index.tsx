import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import Layout from "../../components/common/Layout";
import { ListHeader } from "../../components/list/ListHeader";
import styled from "styled-components";
import { TopButtons } from "../../components/list/TopButtons";
import ListContainer from "../../components/list/ListContainer";

/* eslint-disable react-hooks/rules-of-hooks */
const blogs: NextPage = () => {
  const [all, setAll] = useState(true);
  const [likes, setLikes] = useState(false);

  const setButtons = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e?.currentTarget;
    if (target.disabled) return;
    if (target.id === "all") {
      setLikes(false);
      setAll(true);
    }
    if (target.id === "likes") {
      setAll(false);
      setLikes(true);
    }
  };

  return (
    <Layout width="750px">
      <ListHeader />
      <ContentWrapper>
        <TopButtons all={all} likes={likes} setButton={setButtons} />
        <BreakLine />
        <ListContainer likes={likes} />
      </ContentWrapper>
    </Layout>
  );
};

export default blogs;

const ContentWrapper = styled.div`
  margin: 0 42px;
`;

const BreakLine = styled.div`
  width: 100%;
  height: 4px;
  background: #5382eb;
`;
