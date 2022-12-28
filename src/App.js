import React, { useEffect, useState } from "react";
import '../src/styles/App.css';
import { ClassCounter } from "./components/ClassCounter";
import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import { PostList } from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyBytton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/UseFetching";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyBytton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Create new post
      </MyBytton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <Input />
      <PostFilter 
        filter={filter}
        setFilter={setFilter} 
      />
      {postError &&
        <h1>An error has occurred - {postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}> 
            <Loader />
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS' />
      }
      
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
