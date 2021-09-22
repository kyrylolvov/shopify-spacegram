import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Logo from "../components/Logo";
import PostItem from "../components/PostItem";
import BeatLoader from "react-spinners/BeatLoader";

import { getPosts } from "../store/actions/posts";
import { Post } from "../store/reducers/posts";
import { selectPosts } from "../store/selectors/posts";
import SearchIcon from "../components/common/SearchIcon";

const Feed: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log(startDate, endDate);
  const dispatch = useDispatch();

  const handleSearchButtonClick = () => {
    const body = {
      count: undefined,
      start_date: startDate === "" ? undefined : startDate,
      end_date: endDate === "" ? undefined : endDate,
    };

    console.log(body);
    dispatch(getPosts(body));
  };

  const posts = useSelector(selectPosts);

  const body = {
    count: 12,
  };

  useEffect(() => {
    dispatch(getPosts(body));
  }, []);

  return (
    <>
      <Header>
        <Logo />
        <Wrapper>
          <InputWrapper
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
          />
          <InputWrapper
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
          />
          <IconWrapper onClick={() => handleSearchButtonClick()}>
            <SearchIcon />
          </IconWrapper>
        </Wrapper>
      </Header>
      <Main posts={posts}>
        {posts ? (
          posts.map((post) => (
            <PostItem
              key={post.url}
              title={post.title}
              image={post.url}
              date={post.date}
              description={post.explanation}
              url={post.url}
            />
          ))
        ) : (
          <BeatLoader color={"#eb5757"} />
        )}
      </Main>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e0e1e2;
  border-radius: 50px;
  padding: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 40px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 5px 15px;
  }
`;

const InputWrapper = styled.input`
  border: none;
  margin-right: 10px;
  outline: none;
  background-color: transparent:
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eb5757;
  color: #fff;
  position: absolute;
  margin-left: 300px;
  height: 42px;
  width: 42px;
  border-radius: 50%;

  @media (max-width: 425px) {
    margin-left: 200px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = styled.div<{ posts: Post[] | null }>`
  ${({ posts }) => (posts ? "" : "text-align: center")};
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 50px;
`;

export default Feed;
