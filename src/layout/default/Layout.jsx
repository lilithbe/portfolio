import React, { useState } from 'react'
import styled from 'styled-components'
import Content from './Content'
import Menu from './Menu'

const MainWrapper=styled.div`
display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  min-height: 100vh; 
  `


const DefaultLayout = ({children}) => {
    const [isToggle, setIsToggle] = useState(true)
  return (
      <MainWrapper >
          
          <Content isToggle={isToggle}>
              {children}
          </Content>
          <Menu  isToggle={isToggle} setIsToggle={setIsToggle}/>
       
      </MainWrapper>
  )
}

export default DefaultLayout