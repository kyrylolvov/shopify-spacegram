import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Logo from "../components/Logo";
import PostItem from "../components/PostItem";
import BeatLoader from "react-spinners/BeatLoader";

import { getPosts } from "../store/actions/posts";
import { Post } from "../store/reducers/posts";
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
  }, []);

  return (
    <>
      <Header>
        <Logo />
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

const Header = styled.div``;

const Main = styled.div<{ posts: Post[] | null }>`
  ${({ posts }) => (posts ? "" : "text-align: center")};
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 50px;
`;

export default Feed;
