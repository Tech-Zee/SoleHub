import React,{useState, useEffect}from "react";
import styles from './categoryCards.module.css'
import run from '../assets/shoe2.jpg';
import formal from '../assets/shoe4.jpg';
import sport from '../assets/shoe5.jpg';
import slide from '../assets/shoe6.jpg';


const categories = [
    {
        title: "Sneakers",
        description: "Everyday comfort meets street style",
        image: run,
        button: "Shop now"
    },
     {
        title: "Formal Shoes",
        description: "Classy looks for work and events",
        image: formal,
        button: "Shop now"
    },
     {
        title: "Sport Shoes",
        description: "Designed for training and performance",
        image:sport,
        button: "Shop now"
    },
     {
        title: "Casual Shoes",
        description: "Relaxed comfort for daily ease",
        image: slide ,
        button: "Shop now"
    },
]

function CategoryCard(){
    const [show , setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 200)
    }, [])
    return(
       <>
        <div className={styles.cardHead}>
            Shop By Style
        </div>
    <div className={styles.cardContainer}>
       
        {categories.map((cat, index) => (
             <div className={`${styles.cards} ${show ? styles.show : ""}`} key={index} style={{transitionDelay: `${index * 0.2}s`}}>
                <div className={styles.cardImage} style={{backgroundImage: `url(${cat.image})`}}>
                {/* <img src={categories.image} alt="" /> */}

                 <div className={styles.overlay}>
                <h2 className={styles.head}>{cat.title}</h2>
                <p className={styles.text}>{cat.description}</p>
                <button className={styles.button}>{cat.button}</button>
            </div>
            </div>
             </div>
        ))}
               
            
           
                </div>
                 </>
    )
    
}
export default CategoryCard;