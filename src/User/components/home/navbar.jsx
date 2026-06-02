import { Link } from "react-router-dom";
// import Shop from "../../pages/shop";
import React from "react";
import { useState } from "react";
import styles from './navbar.module.css';
import exit from '../assets/exit.png';
import {SportShoe,TextAlignJustify} from "lucide-react"
import { House, ShoppingCart , CircleGauge, UserRoundPen} from 'lucide-react';


function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
       <>
            {!menuOpen && (
                <div className={styles.headIcon}>
            <h1 className={styles.head}>SoleHub</h1>
             <div className={styles.logo}>
                    <SportShoe  size={40} color="rgb(236, 96, 15)"/>
                </div>
               
            <button className={styles.hamButton} onClick={()=> setMenuOpen(true)}>
            <TextAlignJustify />
            </button>
           </div>
            )}  
             <header>
            <h1 className={styles.head2}>SoleHub</h1>
               
            <nav className={styles.desktopNav}>
            <div className={styles.links}>
                <Link className={styles.link} to= "/shop" onClick={()=> setMenuOpen(false)}>Shop</Link>
                <Link className={styles.link} to= "/" onClick={()=> setMenuOpen(false)}>FAQ</Link>
                <Link className={styles.link} to= "/about" onClick={()=> setMenuOpen(false)}>About</Link>
                <Link className={styles.link} to= "" onClick={()=> setMenuOpen(false)}>Contact</Link>
            </div>
            <div className={styles.headerInput}>
                <input type="search" name="" id="" placeholder="Search shoes" className={styles.search} onClick={()=> setMenuOpen(false)}/>
            </div>
            <div className={styles.icons}>
            <Link to= "/Home" onClick={()=> setMenuOpen(false)}> 
            <House color='#ffff'/>
             </Link>
            <Link to= "/cart" onClick={()=> setMenuOpen(false)}> 
            <ShoppingCart  color='#ffff'/>
            
            </Link>
            <Link to= "/dashboard" onClick={()=> setMenuOpen(false)}>
            <CircleGauge color='#ffff' />
            </Link>
            <Link to= "/auth" onClick={()=> setMenuOpen(false)}>
            <UserRoundPen color='#ffff'/>
            </Link>
            </div>


            </nav>
            {menuOpen && (
                <div className={styles.menuOverlay}>
            <button className={styles.exit} onClick={()=> setMenuOpen(false)}>
            <img src={exit} alt="" className={styles.exit} />
            </button>

            <nav className={styles.menuNav}>
            <div className={styles.links}>
                <Link className={styles.link} to= "/Shop" onClick={()=> setMenuOpen(false)}>Shop </Link>
                <Link className={styles.link} to= "" onClick={()=> setMenuOpen(false)}>FAQ</Link>
                <Link className={styles.link} to= "/about" onClick={()=> setMenuOpen(false)}>About</Link>
                <Link className={styles.link} to= "" onClick={()=> setMenuOpen(false)}>Contact</Link>
            </div>
            <div className={styles.headerInput}>
                <input type="search" name="" id="" placeholder="Search shoes" className={styles.search} />
            </div>
            <div className={styles.icons}>
           <Link to= "/Home" onClick={()=> setMenuOpen(false)}> 
            <House color='#ffff'/>
             </Link>
            <Link to= "/cart" onClick={()=> setMenuOpen(false)}> 
            <ShoppingCart  color='#ffff'/>
            
            </Link>
            <Link to= "/dashboard" onClick={()=> setMenuOpen(false)}>
            <CircleGauge color='#ffff' />
            </Link>
            <Link to= "/auth" onClick={()=> setMenuOpen(false)}>
            <UserRoundPen color='#ffff'/>
            </Link>
            </div>


            </nav>
                </div>
            )}
        </header>
        </>
    )
}
export default NavBar;