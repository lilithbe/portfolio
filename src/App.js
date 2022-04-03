import React, { useEffect, useState } from 'react'
import Layout from './layout'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import PostView from './pages/PostView';
import PostList from './pages/PostList';
import PostWrite from './pages/PostWrite';
import Project from './pages/Project';
import Skill from './pages/Skill';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import { connect } from 'react-redux';
import { setLogin, setLogout } from './redux';
import { postApi } from './lib/axios';
import { AUTH_TOKEN_CHECK } from './common';

const App = ({authData,setLogin,setLogout}) => {
  const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      if(authData.isLogin===false){
        if(sessionStorage.getItem('token')!==null ){
          postApi(setIsLoading,AUTH_TOKEN_CHECK,(res)=>{
            if(res.data.status){
              setLogin(res.data.userData)
            }
          },sessionStorage.getItem('token'))
        }
      }
    
      return () => {
        
      }
    }, [authData.isLogin, setLogin])
    
  
  return (
    <BrowserRouter>
     <Layout>
        <Routes>
          <Route path="/post" element={<Main/>} />
          <Route path="/post/auth/signin" element={<Signin />} />
          <Route path="/post/auth/signup" element={<Signup />} />
          <Route path="/post/auth/profile" element={<Profile />} />
          <Route path="/post/about" element={<About />} />
          <Route path="/post/skill" element={<Skill />} />
          <Route path="/post/project" element={<Project />} />
          <Route path="/post/view/:category/:id" element={<PostView />} />
          <Route path="/post/list/:category" element={<PostList />} />
          <Route path="/post/write/:category" element={<PostWrite />} />
          <Route path="/post/*" element={<NotFound />} />
        </Routes>

  </Layout>
    
    </BrowserRouter>

  
  )
}
const mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLogin:(data)=>dispatch(setLogin(data)),
    setLogout:(data)=>dispatch(setLogout(data))
  };
}; 
export default connect(mapStateToProps,mapDispatchToProps)(App)