import React from "react";
import MyBytton from "./UI/button/MyButton";

export const PostItem = ({ post, id, remove }) => {
  const {title, body} = post;
  return (
    <div className="post">
        <div className="post__content">
          <strong>{id}. {title}</strong>
          <div>{body}</div>
        </div>
        <div className="post__btns">
          <MyBytton onClick={() => remove(post)}>Delete</MyBytton>
        </div>
      </div>
  )
}