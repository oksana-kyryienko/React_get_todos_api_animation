import React from "react";
import MyBytton from "./UI/button/MyButton";

export const PostItem = ({ post, number, remove }) => {
  const {title, body} = post;
  return (
    <div className="post">
        <div className="post__content">
          <strong>{number} {title}</strong>
          <div>{body}</div>
        </div>
        <div className="post__btns">
          <MyBytton onClick={() => remove(post)}>Delete</MyBytton>
        </div>
      </div>
  )
}