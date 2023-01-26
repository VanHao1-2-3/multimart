import React, { Fragment, useId, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '../PagesStyle/LoginStyle'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase.config';
import { async } from '@firebase/util';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
const Signup = () => {
  const navigate = useNavigate()
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    const storageref = ref(storage, `images/${Date.now() + usname}`)
    const uploadTask = uploadBytesResumable(storageref,file)
    uploadTask.on((error)=>{
      toast.error(error.message)},
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl)=>
        {
          // upload profile
         await updateProfile(user,{
          displayName:usname,
          photoURL:downloadUrl
        })
        // save user data in db
        setDoc(doc(db,"users",user.uid),{
          uid:user.uid,
          displayName : usname,
          email,
          photoURL: downloadUrl
        })

      })
    })
   setLoading(false)
    toast.success('Account created')
    navigate('/login')
  }
    catch(err){
      toast.error('Something went wrong')
    }
  }
 const [usname, setUsname] = useState('')
 const [password, setPassword] = useState('')
 const [email, setEmail] = useState('')
 const [file, setFile] = useState( null)
 const [loading, setLoading] = useState(false)
  return (
    <Fragment>
      <Container>
        <form onSubmit={signup}>
          <h1>Signup</h1>
          <input onChange={e => setUsname(e.target.value)} placeholder='Username'></input>
          <input onChange={e => setEmail(e.target.value)} placeholder='Enter your email' type={'email'}></input>
          <input onChange={e => setPassword(e.target.value)} placeholder='Password'></input>
          <input onChange={e => setFile(e.target.files[0])}  type={'file'}></input>
          <button>Create an account</button>
          <NavLink to={'/login'}>
          <p>Already have an account? Login</p>
          </NavLink>
        </form>
      </Container>
    </Fragment>
  )
}

export default Signup