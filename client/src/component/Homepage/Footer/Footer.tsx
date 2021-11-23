import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { TiSocialLinkedin } from 'react-icons/ti';
import { BsPinterest } from 'react-icons/bs';

import './Footer.css';

const Footer = () => {
  return (
    <div  className="footer">
      <div className="footer-logo">
        <img src="footer.png" alt="footer-logo" />
      </div>
      <div className="social-icons">
         <i><FaFacebookF /></i>
         <i><FaTwitter /></i>
         <i><BsInstagram /></i>
         <i><TiSocialLinkedin /></i>
         <i><BsPinterest /></i>
      </div>
      <div className="footer-text">
        <p>87 Tennessee hwy., Alexandria, VA, USA, 22303</p>
        <p>
        <a href="(555) 2346-789">(555) 2346-789</a>, <a href="(555) 2346-790">(555) 2346-790</a>
        </p>
      </div>

      <div className="copyright">
        <p>2021 © All Rights Reserved  |  Privacy Policy </p>
      </div>
    </div>
  )
}

export default Footer;
