import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Logo from "../components/Logo";
import PostItem from "../components/PostItem";

import { getPosts } from "../store/actions/posts";
import { selectPosts } from "../store/selectors/posts";

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  console.log(posts);

  const body = {
    count: 12,
  };

  useEffect(() => {
    dispatch(getPosts(body));
  }, [body]);

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Main>
        {posts
          ? posts.map((post) => (
              <PostItem
                key={post.url}
                title={post.title}
                image={post.url}
                date={post.date}
                description={post.explanation}
                url={post.url}
              />
            ))
          : "Loading"}
      </Main>
    </>
  );
};

const Header = styled.div``;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 50px;
`;

export default Feed;
