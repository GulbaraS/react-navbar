import React from 'react'

import Map from "../../images/map.png"
import {FaFacebook, FaTwitter, FaPinterest, FaTelegram, FaWhatsapp} from "react-icons/fa"

import "./Contacts.scss"

function Contacts() {
  return (
    <section className="contacts">
      

        <h1 className='contacts__title'>Lifestyle Designer</h1>
        <h2>This is Contacts Page</h2>

        <h3>You can find Us Here</h3>
      <div className="container contacts__container">

        <div className="contacts__left">
          <h4>Our address :</h4>
          <p className="contacts__text">Bishkek  Kyrgyzstan</p>
          <p className="contacts__text">Shopokova st. 549</p>
          <p className="contacts__text">tel: +996 555 555 555</p>
          <h3>We are in Social:</h3>

          <ul className='contacts__links'>
          <li className="contacts__item">
            <a href="https://fb.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaFacebook className='contacts__icon'/>
              </a>
          </li>
           <li className="contacts__item">
            <a href="https://twitter.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaTwitter className='contacts__icon'/>
              </a>
          </li>
           <li className="contacts__item">
            <a href="https://pinterest.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaPinterest className='contacts__icon'/>
              </a>
          </li>
           <li className="contacts__item">
            <a href="https://telegram.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaTelegram className='contacts__icon'/>
              </a>
          </li>
           <li className="contacts__item">
            <a href="https:/whatsapp.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaWhatsapp className='contacts__icon'/>
              </a>
          </li>
          </ul>
      
        </div>

        <div className="contacts__right">
        <img src={Map} alt="" className="contacts__map" />
        </div>
        
        
      </div>
    </section>
  )
}

export default Contacts