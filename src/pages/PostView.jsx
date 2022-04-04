import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { POST_GET_ONE, POST_DELETE } from '../common/path'
import { postApi } from '../lib/axios'


import { howMushTime } from '../lib/moment';
import { connect } from 'react-redux';

import MarkdownPreview from '@uiw/react-markdown-preview';
const PostView = ({ authData }) => {
  const { id, category } = useParams()
  
  const go = useNavigate()
  // const go=useNavigate()
  const [post, setPost] = useState({
    subject: '',
    content: '',
    userId: '',
    good: 0,
    hit: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    postApi(setIsLoading, POST_GET_ONE, (res) => {
      setPost(res.data)
    }, { id: id })

    return () => {
      setPost({
        subject: '',
        content: '',
        userId: '',
      })
    }
  }, [id])

  const deleteHandler = (e) => {
    postApi(setIsLoading, POST_DELETE, (res) => {

      setPost({})
      go(`/post/list/${category}`)
    }, { id: id })
  }
  const updateHandler = (e) => { 
    go(`/post/update/${category}/${id}`)
   }

  return (
    <section>
      <header className="main">
     
        <h1>{post.subject}</h1>
      </header>
      <div className='row'>
          <div className='col-lg-9 col-sm-12'>
          <span className="image main"><img src="images/pic11.jpg" alt="" /></span>
      <hr className="major" />
      <p>{howMushTime(post.updatedAt)}</p>
      <hr className="major" />
    
      <MarkdownPreview  source={post.content} />
    

      <hr   />
      {authData.isLogin && post.userId === authData.userId

        ?<div className="d-flex justify-content-between">
           <button className='btn btn-danger' onClick={deleteHandler}>delete</button> 
           <button  className='btn btn-primary'  onClick={updateHandler}>Update</button> 

        </div>: null}
          </div>
          <div className='col-lg-3 col-sm-9'></div>
      </div>

     

    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostView)