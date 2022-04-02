import React from 'react'
import { useParams } from 'react-router-dom'

const PostView = () => {
    const {id,category}=useParams()
    console.log(category ,id)
  return (
    <div>PostView</div>
  )
}

export default PostView