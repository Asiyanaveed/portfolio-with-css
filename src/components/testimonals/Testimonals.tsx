"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Testimonals.module.css'
import { caveatFont, interFont } from '@/font'
import Image from 'next/image'
import TestimonialCard from './testimonial-card/TestimonialCard'
import Autoplay from 'embla-carousel-autoplay'


function Testimonals() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  return (
    <>
      <section id="testimonal" className={`${styles.testimonals} ${caveatFont.className}`}>
        <h1>
            <span>W</span>hat{" "}
            <span>O</span>ther{" "}
            <span>O</span>eople{" "}
            <span>S</span>ay
        </h1>
        
        <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
            
         <TestimonialCard/>  
        </div>
        </div>
      </section>
    </>
  )
}

export default Testimonals
