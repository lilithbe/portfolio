import React, { useEffect, useState } from 'react'
import { POST_GET_LIST_CATEGORY } from '../common/path'
import { postApi } from '../lib/axios'
import { Link, useParams } from 'react-router-dom'
const PostList = () => {
    const {category}=useParams()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        postApi(setIsLoading,POST_GET_LIST_CATEGORY,(res)=>{
          setPosts(res.data)
      },{category:category})
      
        return () => {
            setPosts([])
        }
      }, [category])
    
  return (
    <div>
        <div>
        {category} - PostList {posts.length}
        </div>
        {posts.map((post,i)=>{
            return(
                <div key={i}>
                    <div>{post.subject}</div>
                    <div><Link to={`/post/view/${category}/${post._id}`} >moer</Link></div>

                </div>
            )
        })}
        <div>
            <Link to={`/post/write/${category}`}>글쓰기</Link>
        </div>
    </div>
  )
}

export default PostList