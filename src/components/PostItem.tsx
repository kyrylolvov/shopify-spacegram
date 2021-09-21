import React from "react";
import styled from "styled-components";

import LikeIcon from "./common/LikeIcon";
import ShareIcon from "./common/ShareIcon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  image: string;
  date: string;
  description: string;
  url: string;
}

const PostItem: React.FC<InputProps> = ({
  title,
  image,
  date,
  description,
  url,
}) => {
  const copyToClipboard = function (url: string) {
    const copyText = url;
    navigator.clipboard.writeText(copyText);
  };

  return (
    <Wrapper>
      <ImageSection src={image} alt={title} />
      <InfoSection>
        <Icons>
          <LikeIconWrapper>
            <LikeIcon />
          </LikeIconWrapper>
          <ShareIconWrapper onClick={() => copyToClipboard(url)}>
            <ShareIcon />
          </ShareIconWrapper>
        </Icons>
        <PostTitle>
          <span style={{ fontWeight: 500 }}>🚀🌌 nasa </span>"{title}"
        </PostTitle>
        <PostDescription>{description}</PostDescription>
        <DateSection>{date}</DateSection>
      </InfoSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fafafa;
  border-radius: 10px;
  margin-bottom: 20px;
  border: solid 1px #e0e1e2;
  overflow: hidden;
`;

const ImageSection = styled.img`
  width: 100%;
`;

const InfoSection = styled.div`
  padding 0px 15px;
`;

const LikeIconWrapper = styled.div``;

const ShareIconWrapper = styled.div``;

const Icons = styled.div`
  display: flex;
`;

const PostTitle = styled.p`
  margin: 0;
  font-weight 300;
  font-size: 14px;
`;

const PostDescription = styled.p`
  margin: 0;
  margin-top: 10px;
  font-weight 300;
  font-size: 14px;
`;

const DateSection = styled.div`
  color: #8e8e8e;
  margin 10px 0;
  font-size: 13px;
`;

export default PostItem;
