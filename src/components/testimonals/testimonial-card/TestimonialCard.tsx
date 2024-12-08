
import React from 'react'
import styles from './TestimonialCard.module.css'
import { interFont } from '@/font'
import Image from 'next/image'
import { testimonialsCards } from '@/constant/testimonialscard'


function TestimonialCard() {
  return (
    <>
    {testimonialsCards.map((card, index)=>{return(
       <div className={`${styles.Card} ${interFont.className}`} key={index}>
       <div className={styles.cardImage}>
           <Image src={card.src} alt={"picture"} width={150} height={150}></Image>
       </div>
       <h1 className={styles.name}>{card.name}</h1>
       <h4>{card.title}</h4>
        <p style={{marginBottom: "0px"}}>{card.description} </p>
   </div>
    )})}
      
    </>
  )
}

export default TestimonialCard
