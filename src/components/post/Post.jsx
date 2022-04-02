import React from 'react'

const Post = ({ posts, type }) => {
    return (
        <div className={type}>
            {posts.map((post, i) => {
                if (type === 'features') {
                    return (
                        <article key={i}>
                            <span className={`icon ${post.icon}`} />
                            <div className="content">
                                <h3>{post.label}</h3>
                                <p>{post.content}</p>
                            </div>
                        </article>
                    )
                } else {
                    return (
                        <article key={i}>
                            <a href={post.to} className="image"><img src={post.src} alt={post.alt} /></a>
                            <h3>{post.label}</h3>
                            <p>{post.content}</p>
                            <ul className="actions">
                                <li><a href={post.category} className="button">More</a></li>
                            </ul>
                        </article>
                    )
                }
            })}
        </div>
    )
}

export default Post