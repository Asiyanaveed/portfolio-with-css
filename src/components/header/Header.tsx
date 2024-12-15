"use client"
import React, { useState } from 'react'
import styles from './Header.module.css'
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'
import { IoMdCloseCircle } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import { TiThMenu } from 'react-icons/ti'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className={styles.header}>


        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>Asiya Naveed</h1>

          <AnimatePresence>
            {isOpen  ? (
              <motion.ul className={`${interFont.className} ${styles.navUl} ${styles.active}`}
                key={"active"}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '40%' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className={styles.close} onClick={() => setIsOpen(false)}>
                    <IoMdCloseCircle size={30} />
                </div>

                <li><Link href={"/"}>Home </Link></li>
                <li><Link href={"#about"}>About</Link></li>
                <li><Link href={"#portfolio"}>Portfolio</Link> </li>
                <li><Link href={"#services"}>Services</Link></li>
                <li><Link href={"#testimonal"}>Testimonals</Link> </li>
                <li><Link href={"#contact"}>Contact</Link>  </li>
              </motion.ul>
            )
              :
              (
                <ul className={`${interFont.className} ${styles.navUl}`}>
                  <li><Link href={"/"}>Home </Link></li>
                  <li><Link href={"#about"}>About</Link></li>
                  <li><Link href={"#portfolio"}>Portfolio</Link> </li>
                  <li><Link href={"#services"}>Services</Link></li>
                  <li><Link href={"#testimonal"}>Testimonals</Link> </li>
                  <li><Link href={"#contact"}>Contact</Link>  </li>
                </ul>
              )}
          </AnimatePresence>
              <div className={styles.menu} onClick={() => { setIsOpen(!isOpen) }}>
                 <TiThMenu size={30}/>
              </div>
           
        </nav>
      </header>
    </>
  )
}

export default Header
