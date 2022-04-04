import React from 'react'
import { Link } from 'react-router-dom'
import { howMushTime } from '../../lib/moment'
import { useNavigate } from 'react-router-dom'
const Post = ({ posts, type }) => {
    const go = useNavigate()
    const linkHandler = (e,to) => { 
        e.preventDefault()
        go(to)
     }
    return (
        <div className={`row ${type}`}>
            {posts.map((post, i) => {
                if (type === 'features') {
                    return (
                        <div key={i} className="col-sm-12 col-md-6">
                            <span className={`icon ${post.icon}`} />
                            <div className="content">
                                <h3>{post.subject}</h3>
                                <p>{howMushTime(post.updatedAt)}</p>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={i} className="col-sm-12 col-md-6">
                            <div className='card mb-1'>
                                <div className='card-header'>
                                <button className='btn btn-text' onClick={(e)=>{linkHandler(e,`/post/list/${post.category}`)}}>{post.category} moer</button>
                                </div>
 
                                <div className='card-body' onClick={(e)=>{linkHandler(e,`/post/view/${post.category}/${post._id}`)}} style={{cursor:"pointer"}}>
                                <h5>{post.subject}</h5>
                            
                                </div>

                                <div className="card-footer">
                                <span>{howMushTime(post.updatedAt)}</span>
                            </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Post