import React from 'react'
import { ContentWrapper,Header } from '../../common'
import { Link  } from "react-router-dom";
import Section from '../../components/section/Section';
import Post from '../../components/post/Post';
const Content = ({children}) => {
  
  return (
   <ContentWrapper >
  <div className="inner">
    {/* Header */}
    <Header >
      <Link to="post" className="logo"><strong>Lilith</strong> Portfolio</Link>
      <ul className="icons">
        {/* <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li> */}
        <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
        {/* <li><a href="/" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li> */}
        <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        {/* <li><a href="/" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li> */}
      </ul>
    </Header>
 {children}
  </div>
</ContentWrapper>

  )
}

export default Content

