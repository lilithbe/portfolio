import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { POST_GET_ONE, POST_UPDATE } from '../common/path'
import { postApi } from '../lib/axios'

import MDEditor from '@uiw/react-md-editor';

import { connect } from 'react-redux';

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

  const writeHandler = (e) => {
    postApi(setIsLoading, POST_UPDATE, (res) => {
        console.log(res)
        go(`/post/view/${category}/${res.data._id}`)
    }, post)
}


  return (
    <div>
    <h3 className='px-2'>{category} - PostWrite</h3>
    <div><input className='form-control' value={post.subject} onChange={(e) => { e.preventDefault(); setPost({ ...post, subject: e.target.value }) }} /></div>
    <div className='card'>

        <div className='card-header'>Editor</div>
        <MDEditor value={post.content}
            onChange={(value) => { setPost({ ...post, content: value }) }}
        />
    </div>


    <div><button className='btn btn-primary' onClick={writeHandler}>subject</button></div>
    <div>{isLoading ? 'loading...' : ''}</div>
</div>
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