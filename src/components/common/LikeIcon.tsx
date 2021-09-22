import React from "react";

interface Props {
  likeButton?: boolean;
}

const LikeIcon: React.FC<Props> = ({ likeButton }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={likeButton ? "#eb5757" : "none"}
    color="21272E"
    stroke="currentColor"
    cursor="pointer"
    strokeWidth={likeButton ? "0" : "1.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-heart"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default LikeIcon;
