
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

        <p className={interFont.className}> I design and develop responsive, visually engaging websites tailored to client needs. By turning ideas into functional
           and user-friendly interfaces, I ensure seamless user experiences. I focus on clean code, performance optimization, and modern design trends.
            My goal is to deliver web solutions that elevate your brand.</p>

        <div className={styles.servicescardDiv}>
         <ServicesCard/>
        </div >
      </section>
    </>
  )
}

export default Services
