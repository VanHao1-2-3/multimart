import React, { Fragment, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '../PagesStyle/LoginStyle'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const login = async (e) =>{
e.preventDefault();
try{
  const userCredential = await signInWithEmailAndPassword(auth, email, password )
  const user = userCredential.user
  console.log(user)
  toast.success('Successfully signed in')
  navigate('/')
}
catch(e){}
  }
  return (
    <Fragment>
   <Container>
   <form onSubmit={login}>
   <h1>Login</h1>
    <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Enter your email' type={'email'}></input>
    <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password' type={'password'}></input>
    <button className='login' >Login</button>
   <NavLink to={'/signup'}>
   <p>Don't you have an account? Create an account</p>
   </NavLink>
   </form>
   </Container>
    </Fragment>
  )
}

export default Login