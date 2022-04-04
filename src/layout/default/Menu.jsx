import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { postMenuItems, ToggleButton, MenuWrapper, SearchWrapper, SideBar, POST_GET_MY_POST  } from '../../common'
import {postApi} from '../../lib/axios'

const Menu = ({ isToggle, setIsToggle, authData,setLogin,setLogout }) => {
 
  const toggle = (e) => { 
    e.preventDefault()
    setIsToggle(!isToggle)
   }
   const [isLoading, setIsLoading] = useState(false)
   const [myPosts, setMyPosts] = useState([])
   useEffect(() => {
     if(authData.isLogin){
       postApi(setIsLoading,POST_GET_MY_POST,(res)=>{
        setMyPosts(res.data)
       } ,{userId:authData.userId})
     }
     return () => {
      setMyPosts([])
     }
   }, [authData.isLogin, authData.userId])
   
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
          <SideMenu items={postMenuItems} authData={authData} setLogout={setLogout}  />
        </MenuWrapper>
        {/* Section */}
        <section>
          <header className="major">
            <h2>{authData.isLogin?authData.nickName:'Account'}</h2>
          </header>
          <div className="mini-posts">
            {myPosts.map((post,i)=>{
              return(
                <article key={i}>
                <p>{post.subject}</p>
              </article>
              )
            })}
         
          
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
const SideMenu = ({ items, authData,setLogout }) => {
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

      <li >
        <SubItem >{authData.isLogin ? `${authData.nickName} 님 어서오세요` : 'Account'}</SubItem>
        {authData.isLogin?
         <ul>
         <li><Link to={'/post/auth/profile'}>profile</Link></li>
         <li ><button onClick={(e)=>{e.preventDefault(); setLogout();}}>log out</button></li>
         {authData.isAdmin?  <li><Link to={'/post/admin'}>Admin</Link></li>:null}
       
       </ul>:
        <ul>
        <li><Link to={'/post/auth/signin'}>sign in</Link></li>
        <li><Link to={'/post/auth/signup'}>sign up</Link></li>
      </ul>}
       
      </li>

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
