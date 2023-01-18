import React from "react";
import { useNavigate } from "react-router-dom";
import MyBytton from "./UI/button/MyButton";


export const PostItem = ({ post, id, remove }) => {
  const {title, body} = post;

  const navigate = useNavigate();
  // console.log(navigate)
  // function handleClick() {
  //   navigate(`/posts/${id}`)
  // }

  return (
    <div className="post">
        <div className="post__content">
          <strong>{id}. {title}</strong>
          <div>{body}</div>
        </div>
        <div className="post__btns">
          <MyBytton onClick={() => remove(post)}>Delete</MyBytton>
          <MyBytton onClick={() => navigate(`/posts/${id}`)}>Open</MyBytton>
        </div>
      </div>
  )
}