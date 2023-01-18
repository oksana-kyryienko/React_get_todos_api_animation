import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/UseFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async(id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async(id) => {
    const response = await PostService.getCommentById(id)
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, [])

  return (
   <>
     <h1>You open an article with ID = {params.id}</h1>
     {isLoading 
       ? <Loader />
       : <div>{post.id}. {post.title}</div>
     }
     <h2>Comments</h2>
     {isComLoading
       ? <Loader />
      : <div>
          {comments.map(comm => 
            <div style={{marginTop: 15}} key={comm.id}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
      </div>
    }
     
    </>
  )
}

export default PostIdPage;