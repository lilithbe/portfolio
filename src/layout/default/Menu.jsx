import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { postMenuItems, ToggleButton, MenuWrapper, SearchWrapper, SideBar  } from '../../common'


const Menu = ({ isToggle, setIsToggle, authData,setLogin,setLogout }) => {
 
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
          <SideMenu items={postMenuItems}   />
        </MenuWrapper>
        {/* Section */}
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="#" className="image"><img src="/images/pic07.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="/images/pic08.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="/images/pic09.jpg" alt="" /></a>
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
            <li key={i}><Link to={item.to}>{item.label}</Link></li>
            : <li key={i}>
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
