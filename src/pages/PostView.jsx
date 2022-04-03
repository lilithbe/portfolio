import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { POST_GET_ONE, POST_DELETE } from '../common/path'
import { postApi } from '../lib/axios'
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/nnfx-dark.css'
const PostView = () => {
    const {id,category}=useParams()
    const go=useNavigate()
    // const go=useNavigate()
    const [post, setPost] = useState({
        subject:'',
        content:'',
        userId:'',
        good:0,
        hit:0,
    })
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      postApi(setIsLoading,POST_GET_ONE,(res)=>{
        setPost(res.data)
    },{id:id})
    
      return () => {
        setPost({
          subject:'',
          content:'',
          userId:'',
        })
      }
    }, [id])
    
    const deleteHandler = (e) => { 
      postApi(setIsLoading,POST_DELETE,(res)=>{
      
        setPost({})
        go(`/post/list/${category}`)
    },{id:id})
     }
     Lowlight.registerLanguage('js', javascript);

const renderer = {
  code(snippet, lang) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
  },
};
  return (
   <section>
  <header className="main">
  <h1>{post.subject}</h1>
  </header>

  <span className="image main"><img src="images/pic11.jpg" alt="" /></span>
  <hr className="major" />
  {post.updatedAt}
  <hr className="major" />
  <Markdown value={post.content} renderer={renderer} />
  
  <hr className="major" />
  <button onClick={deleteHandler}>delete</button>
</section>
  )
}

export default PostView