"use client"
import React, { useState } from 'react'
import styles from './ContactMe.module.css'
import { caveatFont, interFont } from '@/font'
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from '@/utils/emailService';


function ContactMe() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();

    const templateParams = {
      to_name: "Asiya Naveed",
      from_name: name,
      from_email: email,
      message: message
    };

    try{
      await sendEmail(templateParams);
        alert("Email sent successfully");
        setName('');
        setEmail('');
        setMessage('');
    }
    catch (error){
      console.error('EmailJs Error',error);
      alert("Failed to send email");
    }
  }	
  
  return (
    <>
      <section id="contact" className={`${styles.contactMe} ${interFont.className}`}>
        <h1 className={caveatFont.className}><span>C</span>ontact {" "}
          <span>M</span>e
        </h1>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi alias doloribus animi! <br />
          Quam nisi quaerat quod. Repudiandae, ducimus repellat.</p>


        <div className={styles.contactMeBottomDiv}>

          <div className={styles.contactLeftDiv}>
            <div className={styles.contactLeftDivContainer}>
              <IoIosMail size={24} color={"var(--logo-color)"} />
              <div className={styles.contactLeftDivText}>
                <h6>Have a question?</h6>
                <h6>I am here to help you</h6>
                <h6>Email me at latifnaved621@gmail.com</h6>
              </div>
            </div>

            <div className={styles.contactLeftDivContainer}>
            <FaMapMarkerAlt size={24} color={"var(--logo-color)"}/>
              <div className={styles.contactLeftDivText}>
                <h6>Current Location</h6>
                <h6>Karachi, Pakistan</h6>
                <h6>serving clients worldwide</h6>
              </div>
            </div>
          </div>
          <div className={styles.contactRightDiv}>
            <form onSubmit={handleSubmit}>
              <div className={styles.topinputDiv}>
                <input type="text" placeholder='your name' className={styles.inputdetails} name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder='your email' className={styles.inputdetails} name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <input type="text" placeholder='Subject' className={styles.inputdetails}  style={{width: "100%"}} />

              <textarea placeholder='your message' className={styles.inputdetails} style={{height: "224px"}} name='message' value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>

              <input type="submit" className={styles.inputBtn} value={"send message"} />
            </form>
          </div>
        </div>




      </section>

    </>
  )
}


export default ContactMe
