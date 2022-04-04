import React, { useEffect, useState } from 'react'
import { POST_GET_LIST_CATEGORY } from '../common/path'
import { postApi } from '../lib/axios'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
const PostList = ({authData}) => {
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
    <div className='card'>
        <div className='card-header'>
        {category} - PostList {posts.length}
        </div>
        {posts.map((post,i)=>{
            return(
                <Link key={i} className='card-body' to={`/post/view/${category}/${post._id}`} >{post.subject}</Link>
            )
        })}
          <div className='card-footer d-flex justify-content-between'>
          {authData.isLogin?
           <Link className='btn btn-primay btn-block' to={`/post/write/${category}`}>글쓰기</Link>:
           <Link className='btn btn-primay btn-block' to={`/post/auth/signin`}>Login</Link>
           }
      </div>

      
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
  export default connect(mapStateToProps,mapDispatchToProps)(PostList)