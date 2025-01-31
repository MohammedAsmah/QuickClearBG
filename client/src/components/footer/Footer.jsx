import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'
export const Footer = () => {
  return (
    <div className='footer' >
        <div className="foot_info">
            <img src={assets.logo} alt="" />
            <p>Copyright @SimoAsmah.com | All right reserved.</p>
        </div>
        <div className="socialmedia">
            <a href="#"><img src={assets.facebook_icon} alt="facebook" /></a>
            
            <a href="#"><img src={assets.twitter_icon} alt="twiter" /></a>
            
            <a href="#"><img src={assets.google_plus_icon} alt="google" /></a>
            
        </div>
    </div>
  )
}
