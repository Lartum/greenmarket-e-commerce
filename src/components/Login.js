import  React, { useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { googleProvider, firebaseAuth, facebookProvider } from '../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { currentUser } from '../redux/slices/auth'

const Login = () => {

const dispatch = useDispatch()
const history = useHistory()
const { user } = useSelector(state => state.auth)

useEffect(() =>{
   if(user){
      history.push({
         pathname:'/profile'
      })
   }
},[user, history])


// const handlePhoneAuth = async () =>{
//    window.
// }

const handleGoogleAuth = async () =>{
   await firebaseAuth.signInWithPopup(googleProvider)
   dispatch(currentUser())
 }

 const handleFacebookAuth = async () =>{
   const result = await firebaseAuth.signInWithPopup(facebookProvider)
   dispatch(currentUser(result.credential.idToken))
 }
 return(
    <>
     <Form >
         <Form.Input 
            fluid
            type='tel'
            placeholder='Phone Number'

         />
         <div id="recaptcha-container"></div>
         <Button>Sign In</Button>
     </Form>
     <Button onClick={handleGoogleAuth}>Sign in via google</Button>
     <Button onClick={handleFacebookAuth}>Sign in via facebook</Button>
     </>
 )
}

export default Login