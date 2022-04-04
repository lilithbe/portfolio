import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthForm, AuthWrapper, FloatingForm, AUTH_SIGNUP } from '../common'
import { postApi } from '../lib/axios'
import { setLogin } from '../redux'

const Signup = ({setLogin}) => {
  const go=useNavigate()
    const [authState, setAuthState] = useState({
        userId:'',
        password:'',
        confirmPassword:'',
        nickName:'',
        userImage:'imoge',
        signType:"local"
    })
    const [isLoading, setIsLoading] = useState(false)
    const [stepByStep, setStepByStep] = useState({
      message:'',
      messageView:false,
    })
    const checkHandler=(e)=>{
      e.preventDefault()
      setStepByStep({
        message:'',
        messageView:false,
      })
      if(authState.userId.length<=4){
        setStepByStep({
          message:'아이디를 5글자 이상 만들어주세요.',
          messageView:true,
        })
      }else if(authState.password.length<=7){
        setStepByStep({
          message:'비밀번호를 8글자 이상 만들어주세요.',
          messageView:true,
        })
      }else if(authState.password !==authState.confirmPassword){
        setStepByStep({
          message:'비밀번호확인이 안됩니다. 다시 확인하세요.',
          messageView:true,
        })
      }else if(authState.nickName.length<=2){
        setStepByStep({
          message:'닉네임을 5글자 이상 만들어주세요.',
          messageView:true,
        })
      }else{
        submitHandler()
      }
    }
    const submitHandler = () => { 
      postApi(setIsLoading,AUTH_SIGNUP,(res)=>{
     
          if(res.data.status){
            console.log(res.data.token)
              sessionStorage.setItem('token',res.data.token)
              setLogin(res.data)
              go('/post')
          }else{
            setStepByStep({
              message:res.data.message,
              messageView:true,
            })
          }
      },authState)
     }

  
  return (
    <AuthWrapper className='text-center'>
      <AuthForm className="form-signin">
  <form onSubmit={checkHandler}>
    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
    <FloatingForm className="form-floating mb-2">
      <input onClick={(e)=>{e.target.select()}}  required value={authState.userId} onChange={(e)=>{setAuthState({...authState,userId:e.target.value})}} type="text" className="form-control" id="floatingInput" name="userId" autoComplete={"false"} />
      <label htmlFor="floatingInput">Email address</label>
    </FloatingForm>
    <FloatingForm className="form-floating mb-2">
      <input onClick={(e)=>{e.target.select()}}  required value={authState.password} onChange={(e)=>{setAuthState({...authState,password:e.target.value})}} type="password" className="form-control" id="floatingPassword" name="Password"  autoComplete={"false"}/>
      <label htmlFor="floatingPassword">Password</label>
    </FloatingForm>

    <FloatingForm className="form-floating mb-2">
      <input onClick={(e)=>{e.target.select()}}  required value={authState.confirmPassword} onChange={(e)=>{setAuthState({...authState,confirmPassword:e.target.value})}} type="password" className="form-control" id="confirmPassword"  name="confirmPassword"  autoComplete={"false"}/>
      <label htmlFor="confirmPassword">Confirm Password</label>
    </FloatingForm>

    <FloatingForm className="form-floating mb-2">
      <input onClick={(e)=>{e.target.select()}}  required value={authState.nickName} onChange={(e)=>{setAuthState({...authState,nickName:e.target.value})}} type="text" className="form-control" id="NickName" name="nickName"  />
      <label htmlFor="NickName">Nick Name</label>
    </FloatingForm>
    
    <button className="w-100 " type="submit">Login</button>
    {stepByStep.messageView?<div>{stepByStep.message}</div>:''}
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
export default connect(mapStateToProps,mapDispatchToProps)(Signup)