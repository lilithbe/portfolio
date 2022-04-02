import React from 'react'
import { useParams } from 'react-router-dom'
const PostList = () => {
    const {category}=useParams()
  return (
    <div>{category} - PostList</div>
  )
}

export default PostList