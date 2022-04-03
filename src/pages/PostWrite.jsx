import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { POST_CREATE } from '../common/path'
import { postApi } from '../lib/axios'
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/nnfx-dark.css'

const PostWrite = () => {
    const { category } = useParams()
    const go = useNavigate()
    const [post, setPost] = useState({
        subject: '',
        content: '',
        userId: 'userId',
        category: category,
        tag: [],
        good: 0,
        hit: 0,
    })
    const [isLoading, setIsLoading] = useState(false)
    const writeHandler = (e) => {
        postApi(setIsLoading, POST_CREATE, (res) => {
            go(`/post/view/${category}/${res.data._id}`)
        }, post)
    }

    Lowlight.registerLanguage('js', javascript);

    const renderer = {
        code(snippet, lang) {
            return <Lowlight key={this.elementId} language={lang} value={snippet} />;
        },
    };

    return (
        <div>
            <h3 className='px-2'>{category} - PostWrite</h3>
            <div><input className='form-control' value={post.subject} onChange={(e) => { e.preventDefault(); setPost({ ...post, subject: e.target.value }) }} /></div>
            <div className='row'>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-header'>Editor</div>
                        <textarea
                        className='p-3'
                                value={post.content}
                                onChange={(e) => { setPost({ ...post, content: e.target.value }) }}
                                rows={20}

                            />
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-header'>Preview</div>
                        <div className='card-body'>
                            <Markdown value={post.content} renderer={renderer} />
                        </div>
                    </div>
                </div>

            </div>

            <div><input value={post.userId} onChange={(e) => { e.preventDefault(); setPost({ ...post, userId: e.target.value }) }} /></div>
            <div><button onClick={writeHandler}>subject</button></div>
            <div>{isLoading ? 'loading...' : ''}</div>



        </div>
    )
}

export default PostWrite