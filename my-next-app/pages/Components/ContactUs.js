import React, { useState } from "react";
import { useRouter } from "next/router"; 
import styles from "@/styles/ContactUs.module.css";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div className={styles.box_container}>
      <Navbar />    
       <header>
        <h1>Contact Us</h1>
      </header>

      <section className={styles.footer}>
        <div className="box-container">
          
          <div className={styles.box}>
            <h3>Quick Links</h3>
            <Link href="/Events">Events</Link> 
            <Link href="/EventOrganiser">Event Organizer</Link>
            <Link href="/Upcoming Events">UpcomingEvents</Link> 
            <Link href="/Gallery">Gallery</Link>
          </div>

          {/* Contact Info */}
          <div className={styles.box}>
            <h3>Contact Info</h3>
            <a href="tel:+919692500950"> +91 9692500950 </a>
            <a href="tel:+919911755583">  +91 9911755583 </a>
            <a href="mailto:plannerX@gmail.com"> plannerX@gmail.com </a>
            <a href="mailto:arrsh@gmail.com">  arrsh@gmail.com </a>
            <a href="#"> Bangalore, India - 560054 </a>
          </div>

          {/* Social Media */}
          <div className={styles.box}>
            <h3>Follow Us</h3>
            <a href="#">  Facebook </a>
            <a href="#">  Twitter </a>
            <a href="#">  Instagram </a>
            <a href="#">  LinkedIn </a>
          </div>
        </div>

        <div className={styles.credit}>
          Created by <span>Planners</span> | All rights reserved
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
