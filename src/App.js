// import React, { useEffect, useState } from "react";
import '../src/styles/App.css';
// import { ClassCounter } from "./components/ClassCounter";
// import { Counter } from "./components/Counter";
// import { Input } from "./components/Input";
// import { PostList } from "./components/PostList";
// import PostForm from "./components/PostForm";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MyBytton from "./components/UI/button/MyButton";
// import { usePosts } from "./hooks/usePosts";
// import PostService from "./API/PostService";
// import Loader from "./components/UI/loader/Loader";
// import { useFetching } from "./hooks/UseFetching";
// import { getPageCount } from "./components/utils/pages";
// import Pagination from "./components/UI/pagination/Pagination";
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';

function App() {
  return (
  <>
      <div className='navbar'>
        <div className="navbar__links">
          <Link className='link' to='/about'>About website</Link>
          <Link className='link' to='/posts'>Posts</Link>
        </div>
      </div>
    <Routes>
    
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  </>
  )

}

export default App;
