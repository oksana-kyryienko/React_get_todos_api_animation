import React, { useState } from 'react';
import MyBytton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {

  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost);
    setPost({title: '', body: ''});
  }


  return (
    <form>
        <MyInput
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value})}
          type="text" 
          placeholder="Post title" 
        />

        <MyInput 
          value={post.body}
          onChange={event => setPost({...post, body: event.target.value})}
          type="text" 
          placeholder="Post description" 
        />
        <MyBytton 
          onClick={addNewPost}
          >Create a post
        </MyBytton>
      </form>
  )
}

export default PostForm;