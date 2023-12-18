import React from 'react'
import './Contact.scss'
import netImg from '../../assets/img/netImg1.png'
import netImg2 from '../../assets/img/netImg2.png'
import netImg3 from '../../assets/img/netImg3.png'

function Contact() {
  return (
    <div className='c__hero'>
       <div className="container  contact__inner">
        <h2 className='c__title'>Contact</h2>
        <p><span>Ask us about</span></p>
        <div className="networkk">
          <div className="box">
            <img src={netImg} alt="" />
            <p>The quality of our talent network</p>
          </div>
          <div className="box">
            <img src={netImg2} alt="" />
            <p>Usage & implementation of our software</p>
          </div>
          <div className="box">
          <img src={netImg3} alt="" />
          <p>How we help drive innovation</p>
          </div>
        </div>
        <div className="ask">
        <input type="text" name="" id="" placeholder='Name'/>
          <input type="email" placeholder='Emaill Addres'/>
          <input type="text" placeholder='Company name'/>
          <input type="text" name="" id="" placeholder='Title '/>
          <input type="text"  placeholder='Massage'/>
        </div>
       </div>
    </div>
  )
}

export default Contact
