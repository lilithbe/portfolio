import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AuthForm, AuthWrapper, FloatingForm } from '../common'
import { AUTH_SIGNIN } from '../common/path'
import { postApi } from '../lib/axios'
import { setLogin } from '../redux'

const Login = ({setLogin}) => {
    const [authState, setAuthState] = useState({
        userId:'',
        password:'',
    })
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = (e) => { 
        e.preventDefault()
        postApi(setIsLoading,AUTH_SIGNIN,(res)=>{
            if(res.data.status){
                sessionStorage.setItem('token',res.data.token)
                setLogin(res.data.data)
            }
        })
     }
  return (
    <AuthWrapper className='text-center'>
      <AuthForm className="form-signin">
  <form onSubmit={submitHandler}>
    <h1 className="h3 mb-3 fw-normal">Login</h1>
    <FloatingForm className="form-floating mb-2">
      <input type="email" className="form-control" id="floatingInput"  />
      <label htmlFor="floatingInput">Email address</label>
    </FloatingForm>
    <FloatingForm className="form-floating">
      <input type="password" className="form-control" id="floatingPassword"  />
      <label htmlFor="floatingPassword">Password</label>
    </FloatingForm>
    
    <button className="w-100 " type="submit">Login</button>

  </form>
</AuthForm>

    </AuthWrapper>
  )
}

const mapStateToProps = (state) => {
    return {
      authData: state.authData,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        setLogin:(data)=>dispatch(setLogin(data))
    };
  }; 
export default connect(mapStateToProps,mapDispatchToProps)(Login)