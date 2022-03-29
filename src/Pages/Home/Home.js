import {useRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import { init } from 'ityped'


import Photo from "../../images/kitten.jpg"
import {FaFacebook, FaTwitter, FaPinterest} from "react-icons/fa"

import "./Home.scss"


function Home() {

  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["cookies and kittens"],
      backDelay: 1500,
      backSpeed: 60,
      });
  }, [])


  return (
    <section className="Home">
      <div className="container home__container">
        <div className="home__left">
          <img src={Photo} alt="kitten-pic" className='home__photo'/>
        </div>

        <div className="home__right">
          <h1 className="home__title">Lifestyle Designer</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p className='home__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquam accusantium nemo quod soluta quidem dignissimos iure quam, beatae, dolore voluptate facilis veniam asperiores quibusdam doloribus non sunt. Nihil sunt eum corporis assumenda. Odio consequatur, ut quaerat odit ipsam corrupti et. Vel quas voluptas expedita.</p>
          <ul className="home__links">
            <li>
              <a href="https://fb.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaFacebook className='home__icon'/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaTwitter className='home__icon' />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com"
              target="blank" 
              rel="noopener noreferrer">
              <FaPinterest className='home__icon' />
              </a>
            </li>
          </ul>

          <Link to="/contact" className="home__cta">
            Hire me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home