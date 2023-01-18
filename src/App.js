import '../src/styles/App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';
import PageNotFound from './components/UI/PageNotFound/PageNotFound';
import PostIdPage from './pages/PostIdPage';
// import { privateRoutes } from './router/routes';

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
  )
}

export default App;
