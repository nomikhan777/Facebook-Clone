import React from 'react'
import { Button } from '@mui/material'
import "./Login.css"
import { auth, provider} from './firebase'




function Login() {
    const signIn=()=>{
        // Sign ....
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            console.log(result);

        })
        .catch((error) =>alert(error.message));

    }
  return (
    <div className='login'>
        <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"alt="" 
          />

          <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" 
          />
          </div>

          <Button type="submit" onClick={signIn}
          >
            Sign In

          </Button>

    </div>
    
  )
}

export default Login