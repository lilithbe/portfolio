import React, { useEffect, useState } from 'react'
import Post from '../components/post/Post'
import Section from '../components/section/Section'

import { POST_GET_LIST_ALL } from '../common/path'
import { postApi } from '../lib/axios'






  
const Main = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      postApi(setIsLoading,POST_GET_LIST_ALL,(res)=>{
        setPosts(res.data)
    },)
    
      return () => {
          setPosts([])
      }
    }, [])



  return (
    <div>
       

    
      <Section headerLabel={"Study Post"}>
        <Post type={"posts"} posts={posts.filter(f=>f.category!=='project')}></Post>
      </Section>
      {posts.filter(f=>f.category==='project').length!==0?
      <div>
        <hr className='my-5'/>
      <Section headerLabel={"Project Post"}>
        <Post type={"posts"} posts={posts.filter(f=>f.category==='project')}></Post>
      </Section>
      </div>
      :null
    }

    </div>
  )
}

export default Main