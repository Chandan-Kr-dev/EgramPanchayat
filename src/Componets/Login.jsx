import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { button } from '@material-tailwind/react'

const Login = () => {
    const {user,loginWithRedirect}=useAuth0()
    console.log("Current User",user)
  return <button onClick={()=>loginWithRedirect()} >Login</button>
}

export default Login