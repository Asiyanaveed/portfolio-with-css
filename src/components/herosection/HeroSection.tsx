"use client"
import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/font'
import Button from '../button/Button'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import {motion} from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import { FaXTwitter } from 'react-icons/fa6'


function HeroSection() {
  return (
   <>
   <section className={`${styles.hero} ${interFont.className}`}>
    <h1>Hey! I'm{" "}
         <span>Asiya Naveed</span>
         {" "}
         <motion.span style={{display:"inline-block", fontSize: "50px", rotate:"0deg"}} animate={{rotate:[0, 15, -10 ,20, -10,0]}} 
         transition={{duration:1.5,repeat:Infinity,ease: "easeInOut"}}>👋

         </motion.span>
          
    <br /><span>I</span>&apos;m {" "} 
    <Typewriter
      words={["Front End Web Developer","Ux Ui Designer"]}
      loop={Infinity}
      cursor={true}
      cursorStyle={"_"}
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
    </h1>

    <p>I can build user interface for websites and web applications with <br /> <span>Next.JS</span> and {" "}
    <span>React JS</span>.</p>
    <Button text={"Hire Me"}/>

    <div  className={styles.socialIconDiv}>
       <FaFacebookF size={30} color={'black'}/>
       <FaXTwitter size={30} color={'black'}/>
       <FaInstagram size={30} color={'black'}/>
       <FaWhatsapp size={30} color={'black'}/>
       <FaTelegramPlane size={30} color={'black'}/>
    </div>
    <div className={styles.bottomImgDiv}>
      <Image src={"/portfolio-pics/behance.png"} alt={"behance pic"} width={156} height={156} ></Image>
      <Image src={"/portfolio-pics/dribble.png"} alt={"behance pic"} width={156} height={156}></Image>
      <Image src={"/portfolio-pics/upwork.png"} alt={"behance pic"} width={156} height={156}></Image>
      <Image src={"/portfolio-pics/freelance.png"} alt={"behance pic"} width={156} height={156}></Image>
      </div>
   </section>
   </>
  )
}

export default HeroSection
