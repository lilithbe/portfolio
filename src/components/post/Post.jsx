import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ posts, type }) => {
    return (
        <div className={type}>
            {posts.map((post, i) => {
                if (type === 'features') {
                    return (
                        <article key={i}>
                            <span className={`icon ${post.icon}`} />
                            <div className="content">
                                <h3>{post.subject}</h3>
                                <p>{post.updatedAt}</p>
                            </div>
                        </article>
                    )
                } else {
                    return (
                        <article key={i}>
                            <a href={post.to} className="image"><img src={post.src} alt={post.alt} /></a>
                            <h3>{post.category} - {post.subject}</h3>
                            <p>{post.updatedAt}</p>
                            <ul className="actions">
                                <li><Link to={`/post/view/${post.category}/${post._id}`} className="button">Open Post</Link></li>
                            </ul>
                        </article>
                    )
                }
            })}
        </div>
    )
}

export default Post