import React, { useState } from "react";
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
  const [showText, toggleShowText] = useState(true);
  const [shareColor, toggleShareColor] = useState("#21272E");
  const [likeButton, toggleLikeButton] = useState(false);

  console.log(showText);
  const copyToClipboard = function (url: string) {
    const copyText = url;
    navigator.clipboard.writeText(copyText);
    toggleShareColor("#3897ff");
    setTimeout(function () {
      toggleShareColor("#21272E");
    }, 500);
  };

  return (
    <Wrapper>
      <ImageSection src={image} alt={title} />
      <InfoSection>
        <Icons>
          <LikeIconWrapper
            onClick={() => toggleLikeButton(!likeButton)}
            likeButton={likeButton}
          >
            <LikeIcon likeButton={likeButton} />
          </LikeIconWrapper>
          <ShareIconWrapper
            color={shareColor}
            onClick={() => copyToClipboard(url)}
          >
            <ShareIcon />
          </ShareIconWrapper>
        </Icons>
        <PostTitle>
          <span style={{ fontWeight: 500 }}>🚀🌌 nasa </span>"{title}"
        </PostTitle>
        <PostDescription showText={showText}>{description}</PostDescription>
        <ToggleShow onClick={() => toggleShowText(!showText)}>
          {showText ? "more" : "less"}
        </ToggleShow>
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

const LikeIconWrapper = styled.div<{ likeButton: boolean }>`
  animation: ${({ likeButton }) =>
    likeButton ? "pop 0.3s linear 1" : "pop 0.3s linear 1"};

  @keyframes pop {
    50% {
      transform: scale(1.2);
    }
  }
`;

const ShareIconWrapper = styled.div<{ color: string }>`
  color: ${({ color }) => (color ? color : color)};
`;

const Icons = styled.div`
  display: flex;
`;

const PostTitle = styled.p`
  margin: 0;
  font-weight 300;
  font-size: 14px;
`;

const PostDescription = styled.p<{ showText: boolean }>`
  margin: 0;
  white-space: ${({ showText }) => (showText ? "nowrap" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  font-weight 300;
  font-size: 14px;
`;

const ToggleShow = styled.p`
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  color: #8e8e8e;
`;

const DateSection = styled.div`
  color: #8e8e8e;
  margin 10px 0;
  font-size: 13px;
`;

export default PostItem;
