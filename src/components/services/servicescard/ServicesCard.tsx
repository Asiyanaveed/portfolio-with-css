"use client"
import React, { useRef } from 'react'
import styles from './ServicesCard.module.css'
import { interFont } from '@/font'
import Image from 'next/image'
import { servicesCard } from '@/constant/servicescard'
import { motion, useMotionValue, useTransform } from 'framer-motion'

function ServicesCard() {
    return (
        <>
            {servicesCard.map((item, index) => {
                return (
                   <Card key={index} item={item} />
                )
            })

            }
        </>
    )
}
//card component

function Card({item}:{item:{src:string, title:string, description:string}}) {

    const cardRef= useRef<HTMLDivElement|null>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    const rotateX =useTransform(mouseY, [-100, 100], [10, -10])
    const rotateY =useTransform(mouseX, [-100, 100], [-10, 10])

    const handleMouseMove = (e:React.MouseEvent) => {
        if(!cardRef.current) return;
    const react = cardRef.current.getBoundingClientRect()
    const x = e.clientX - react.left - react.width / 2
    const y = e.clientY - react.top - react.height / 2

    mouseX.set(x)
    mouseY.set(y)
 }
 const handleMouseLeave =()=> {
    mouseX.set(0)
    mouseY.set(0)
    }
    return (
        <motion.div className={`${styles.card} ${interFont.className}`} 
        ref={cardRef}
        style={{perspective : 1000, rotateX: rotateX, rotateY: rotateY}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
            <div className={styles.cardImg}>
                <Image src={item.src} alt={"pic"} width={60} height={60}></Image>
            </div>
            <h1>{item.title}</h1>
            <p>{item.description} </p>
        </motion.div>
    )


}




export default ServicesCard
