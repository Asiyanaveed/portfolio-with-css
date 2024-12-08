"use client"
import React from 'react'
import styles from './Portfolio.module.css'
import { caveatFont, interFont } from '@/font'
import Image from 'next/image'
import PortfolioCard from './portfolio-cards/PortfolioCard'

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h1 className={`${caveatFont.className}`}>
        <span>M</span>y{" "}
        <span>L</span>ast {" "}
        <span>W</span>ork
        </h1>
        <p className={interFont.className}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci minima <br />
        similique rem quidem consequuntur doloribus autem nisi aspernatur obcaecati  <br />
        debitis.</p>

        <div className={styles.cardDiv}>
            <PortfolioCard/>
            
        </div>
      </section>
    </>
  )
}

export default Portfolio
