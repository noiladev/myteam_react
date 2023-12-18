import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/myteam (2).svg'
import socialMedias from '../../assets/img/Group 31 (3).png'
function Footer() {
  return (
    <footer>
      <div className="container  footer__inner">
        <div className="footer__nav">
          <img src={logo} alt="" />
          <span>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>

          </span>
        </div>
        <p className='footer__info'>987  Hillcrest LaneIrvine, CACalifornia 92714Call Us : 949-833-7432</p>
        <div className="footer__social">
          <span>
            <a href="#">
              <img src={socialMedias} alt="" />
            </a>
          </span>
            <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
  }

export default Footer
