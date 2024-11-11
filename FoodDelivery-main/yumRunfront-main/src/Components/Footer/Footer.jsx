import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
               elit. Fugiat dolorum dicta officiis, quos ea similique,
               dolore tempore autem veniam est unde, corporis recusandae 
               ducimus dolor? Dignissimos officia voluptatibus nihil rem!
            </p>
            <div className='footer-social-icons'>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <li>+1-212-456-7890</li>
          <li>contact@foodies.com</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2024 Foodies.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
