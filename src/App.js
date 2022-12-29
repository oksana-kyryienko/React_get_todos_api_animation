import '../src/styles/App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Posts from './pages/Posts/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import PageNotFound from './components/UI/PageNotFound/PageNotFound';

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
  )
}

export default App;
