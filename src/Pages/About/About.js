import React from 'react'

import {FaHtml5, FaCss3Alt, FaSass, FaReact} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"

import pic1 from "../../images/flower.jpg"
import pic2 from "../../images/yoga.jpg"
import pic3 from "../../images/sweet.jpg"

import "./About.scss"

function About() {
  return (
    <section className="about">
      <div className="container">

        <h1 className='about__title'>Lifestyle Designer</h1>
        <h2>This is Page About Our Company</h2>
        <h3> To create your site we use</h3>

        <ul className="skills">
          <li className="skills__item"><FaHtml5/> HTML</li>
          <li className="skills__item"><FaCss3Alt/> CSS</li>
          <li className="skills__item"><FaSass/> Sass</li>
          <li className="skills__item"><SiJavascript/> JavaScript</li>
          <li className="skills__item"><FaReact/> React</li>
        </ul>


        <h3>Latest Works</h3>

        <div className="works">

          <ul className="works__list">
            <li className="works__item">
              <img src={pic1} alt="flower-pic" className="works__pic" />
              <h4>Flower Shop</h4>
            </li>
            <li className="works__item">
              <img src={pic2} alt="yoga.pic" className="works__pic" />
              <h4>Yoga Studio</h4>
            </li>
            <li className="works__item">
              <img src={pic3} alt="sweet-pic" className="works__pic"  />
              <h4>Candy Shop</h4>
            </li>
          </ul>

        </div>
      </div>
    
    </section>
  )
}

export default About