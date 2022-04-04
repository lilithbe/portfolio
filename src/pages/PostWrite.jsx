import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { POST_CREATE } from '../common/path'
import { postApi } from '../lib/axios'



import MDEditor from '@uiw/react-md-editor';



const PostWrite = () => {
    const { category } = useParams()
    const go = useNavigate()
    const [post, setPost] = useState({
        subject: '',
        content: '',
        stacks: [],
        category: category,
        thumbnamil: [],
        tag: [],
        good: 0,
        hit: 0,
    })

    const [isLoading, setIsLoading] = useState(false)
    const writeHandler = (e) => {
        if(post.subject.length===0){
            alert('제목을 입력하세요.')
        }else{
            postApi(setIsLoading, POST_CREATE, (res) => {
                go(`/post/view/${category}/${res.data._id}`)
            }, post)
        }
      
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

export default PostWrite