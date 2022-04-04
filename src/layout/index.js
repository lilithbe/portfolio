import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DefaultLayout from './default/Layout'


const Layout = ({children}) => {
    const location= useLocation()
    const [layoutType, setLayoutType] = useState('default')
  
    
    

    useEffect(() => {
    
        let path = location.pathname.split("/")[2]
        if(path===""){
            setLayoutType("default")
        }else if(path==="admin"){
            setLayoutType("admin")
        }else{
            setLayoutType("default")
        }
    
      return () => {
        
      }
    }, [location])

    const template =(children)=>{
        switch (layoutType) {
            case "admin":
                return (
                    <div>
                        {children}
                    </div>
                )
            default:
                return (
                    <DefaultLayout>
                        {children}
                    </DefaultLayout>
                )
        }
    }
    
  return template(children)
}

export default Layout