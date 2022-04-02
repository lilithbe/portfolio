import React from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import PostView from './pages/PostView';
import PostList from './pages/PostList';

const App = () => {
  return (
    <BrowserRouter>
     <Layout>
     <Routes>
    
    <Route path="/post"  element={<Main/>} />
       <Route path="/post/view/:category/:id" element={<PostView/>} />          
       <Route path="/post/list/:category" element={<PostList/>} />       
       <Route path="/post/admin" element={'<admin />'} />
       <Route path="/post/*" element={<NotFound/>} />
     </Routes>

  </Layout>
    
    </BrowserRouter>

  
  )
}

export default App