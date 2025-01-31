
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import "./navbar.css"
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
export const Navbar = () => {
  const Navigate=useNavigate()
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()
  return (
    <div className='navbar' >
        <img className='logo_navbar' onClick={()=>{Navigate('/') }} src={assets.logo} alt="logo"/>
        {isSignedIn 
        ? <div>
          <UserButton/>
        </div>
        :<button onClick={()=>openSignIn({})} className='black-btn btn-ing' >Get started <img src={assets.arrow_icon} alt="arrow_icon"/></button> }
        
    </div>
  )
}
