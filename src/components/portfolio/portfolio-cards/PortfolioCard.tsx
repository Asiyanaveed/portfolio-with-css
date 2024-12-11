"use client"
import React from 'react'
import styles from './PortfolioCard.module.css'
import Image from 'next/image'
import { portfolioCards } from '@/constant/portfolioCard'
import Link from 'next/link'
import {motion} from 'framer-motion'

function PortfolioCard() {
  return (
    <>
      {portfolioCards.map((item, index) => {
        return (
          <motion.div className={styles.card2} key={index}
          initial={{opacity:0, scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1}}>
            <Link href={item.href}>
            <div className={styles.cardImage}>

              {item.type == "image" ? (<Image src={item.src} alt={"my pic"} width={350} height={350} className={styles.Image}></Image>)
                : (
                  <video src={item.src} autoPlay loop muted controls ></video>
                )}
            </div></Link>

            <div className={styles.cardText}>{item.title} </div>
          </motion.div>
        )
      })}

    </>
  )
}

export default PortfolioCard
