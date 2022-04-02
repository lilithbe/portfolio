import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { postMenuItems } from '../../common'
import { MenuWrapper, SearchWrapper, SideBar } from './styled'
const ToggleButton=styled.button`
 
  text-decoration: none;
  -moz-transition: left 0.5s ease;
  -webkit-transition: left 0.5s ease;
  -ms-transition: left 0.5s ease;
  transition: left 0.5s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  border:none;
  outline: none;
  box-shadow: none;
  
  display: block;
  height: 7.5em;
  left: 26em;
  line-height: 7.5em;
  outline: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-indent: -15em;
  white-space: nowrap;
  top: 0;
  width: 6em;
  z-index: 10000;
:hover{
  background-color:unset!important;
}

 :before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '\f0c9';
  font-size: 2rem;
  height: inherit;
  left: 0;
  line-height: inherit;
  position: absolute;
  text-indent: 0;
  top: 0;
  width: inherit;
}


@media screen and (max-width: 1680px) {
  height: 6.25em;
  left: 24em;
  line-height: 6.25em;
  text-indent: 5em;
  width: 5em;

   :before {
    font-size: 1.5rem;
  }

}

@media screen and (max-width: 1280px) { 

  text-indent: 6em;
    width: 6em;

   :before {
    font-size: 1.5rem;
    margin-left: -0.4375em;
  }


}

@media screen and (max-width: 736px) {
  text-indent: 7.25em;
  width: 7.25em;

   :before {
    color: #7f888f;
    margin-left: -0.0625em;
    margin-top: -0.25em;
    font-size: 1.1rem;
    z-index: 1;
  }

   :after {
    background: rgba(222, 225, 226, 0.75);
    border-radius: 0.375em;
    content: '';
    height: 3.5em;
    left: 1em;
    position: absolute;
    top: 1em;
    width: 5em;
  }
}


`

const Menu = ({ isToggle, setIsToggle }) => {

  const toggle = (e) => { 
    e.preventDefault()
    setIsToggle(!isToggle)
   }
  return (
    <SideBar className={`${isToggle?'inactive':''}`} >
      <div className="inner">
        {/* Search */}
        <SearchWrapper className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </SearchWrapper>
        {/* Menu */}
        <MenuWrapper>
          <header className="major">
            <h2>Menu</h2>
          </header>
          <SideMenu items={postMenuItems} />
        </MenuWrapper>

        {/* Section */}
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="#" className="image"><img src="images/pic07.jpg" alt /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic08.jpg" alt /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic09.jpg" alt /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
          </div>
          <ul className="actions">
            <li><a href="#" className="button">More</a></li>
          </ul>
        </section>
        {/* Section */}
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          <ul className="contact">
            <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">1234 Somewhere Road #8254<br />
              Nashville, TN 00000-0000</li>
          </ul>
        </section>

      </div>
      <ToggleButton onClick={toggle} className="toggle" />
    </SideBar>

  )
}

export default Menu
const SideMenu = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return (
          item.children.length === 0 ?
            <li><Link to={item.to}>{item.label}</Link></li>
            : <li>
              <SubItem >{item.label}</SubItem>
              <ul>
                {item.children.map((cItem, c) => {
                  return (
                    <li key={c}  ><Link to={cItem.to}>{cItem.label}</Link></li>
                  )
                })}
              </ul>
            </li>
        )
      })}

    </ul>
  )
}

const SubItem = ({children}) => { 
  const [sapnClass, setSapnClass] = useState('opener')
  const toggle = (e) => { 
    e.preventDefault()
      if(sapnClass==='opener'){
        setSapnClass('opener active')
      }else{
        setSapnClass('opener')
      }
   }
  return(
    <span className={sapnClass} onClick={toggle}>{children}</span>
  )
 }
