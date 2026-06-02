import React from "react";
import styles from "./footer.module.css"
import { Link } from "react-router-dom";
import {SportShoe, X,Music2,Phone,Camera} from "lucide-react"

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerBox}>

                <div className={styles.footerIntro}>

                       < div className={styles.logo}>
                    <SportShoe  size={20} color="rgb(236, 96, 15)"/> 
                    <h1 className={styles.head}>SoleHub</h1>
                    </div>
                        <p className={styles.footerParagraph}>
                            Elevating your everyday lifestyle with timeless essentials, modern comfort, and pieces designed to fit seamlessly into your world
                        </p>
                </div>

                <div className={styles.footerContent}>

            <div className={styles.footerLinks}>
                <h2>Quick Links</h2>
                <Link to="/home" className={styles.link}>Home</Link>
                <Link to="/about" className={styles.link}>About</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
                <Link to="/shop" className={styles.link}>Shop </Link>
                <Link to="/faq" className={styles.link}>FAQ</Link>
            </div>
            <div className={styles.footerCat}>
                <h2>Profile</h2>
            <Link to="/cart" className={styles.link}>Cart</Link>
            <Link to="/dashboard" className={styles.link}>Dashboard</Link>
            <Link to="/profile" className={styles.link}>Profile</Link>
            </div>
          
            <div className={styles.footerSocials}>
                  <h2>Socials</h2>
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><Phone color="#ffffff"/></a>
                <a href="https://www.tiktok.com/en/" target="_blank" rel="noopener noreferrer"><Music2  color="#ffffff"/></a>
                <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer"><X color="#ffffff"/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Camera color="#ffffff"/></a>
            </div>

                </div>

                <div className={styles.footerBottom}>
                &copy;2026 SoleHub. All rights reserved. Privacy Policy. Terms & Conditions.
                </div>
            </div>
        </div>
    )
}
export default Footer;