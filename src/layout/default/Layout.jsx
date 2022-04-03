import React, { useState } from 'react'
import { connect } from 'react-redux'
import { MainWrapper } from '../../common'
import { setLogin, setLogout } from '../../redux'
import Content from './Content'
import Menu from './Menu'




const DefaultLayout = ({children,authData,setLogin,setLogout}) => {
    const [isToggle, setIsToggle] = useState(false)
  return (
      <MainWrapper >
          
          <Content isToggle={isToggle}>
              {children}
          </Content>
          <Menu  isToggle={isToggle} setIsToggle={setIsToggle} authData={authData} setLogin={setLogin}setLogout={setLogout}/>
       
      </MainWrapper>
  )
}
const mapStateToProps = (state) => { 
  return {
    authData:state.authData,
  }
 }
 const mapDispatchToProps = (dispatch) => {
  return {
      setLogin:(data)=>dispatch(setLogin(data)),
      setLogout:(data)=>dispatch(setLogout(data))
  };
}; 
export default connect(mapStateToProps,mapDispatchToProps)(DefaultLayout)