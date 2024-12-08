 import React from 'react'
 import styles from './Footer.module.css'
import { caveatFont } from '@/font'
 
 function Footer() {
   return (
     <>
       <footer className={styles.footer}>
        <h1 className={caveatFont.className}> © 2024 Asiya Naveed All rights reserved</h1>
       </footer>
     </>
   )
 }
 
 export default Footer
 