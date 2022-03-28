import React from 'react'

import "./Notfound.scss"

import error404 from "../../images/404.jpg"

function Notfound() {
  return (
    <section className='notfound'>
        <img src={error404} alt="404" />
    </section>
  )
}

export default Notfound