
import React from 'react'
import styles from './Services.module.css'
import { caveatFont, interFont } from '@/font'
import Image from 'next/image'
import ServicesCard from './servicescard/ServicesCard'


function Services() {
  return (
    <>
      <section id="services" className={styles.services}>
        <h1 className={caveatFont.className}>
          <span>W</span>hat {"  "}
          <span>I</span> {"  "}
          <span>D</span>o {"  "}
          <span>F</span>or {"  "}
          <span>C</span>lients
        </h1>

        <p className={interFont.className}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore suscipit dolorum <br />
          assumenda exercitationem expedita a totam fugit, ipsa quam!</p>

        <div className={styles.servicescardDiv}>
         <ServicesCard/>
        </div >
      </section>
    </>
  )
}

export default Services
