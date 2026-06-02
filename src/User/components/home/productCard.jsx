import React from "react";
import prod1 from '../assets/prod1.png';
import prod2 from '../assets/prod2.png';
import prod3 from '../assets/prod10.png';
import prod4 from '../assets/prod11.png';
import prod5 from '../assets/prod5.png';
import prod6 from '../assets/prod3.png';
import styles from './productCard.module.css'

const products = [
    {
        title: "Sneakers",
        description: "Clean, versatile, and built for everyday style",
        button: "View our products",
        image: prod1,
    },
     {
        title: "Sport Shoes",
        description: "Engineered for comfort, speed, and performance",
        button: "View our products",
        image: prod2,
    },
     {
        title: "Street Classics",
        description: "Bold designs that stand out on every street",
        button: "View our products",
        image: prod3,
    },
     {
        title: "Casual Shoes",
        description: "Effortless comfort for your daily routine",
        button: "View our products",
        image: prod5,
    },
    {
        title: "Premium Picks",
        description: "Crafted with detail for a refined look",
        button: "View our products",   
        image: prod4,
    },
    {
        title: "Everyday Essentials",
        description: "Reliable style you can wear anywhere",
        button: "View our products",
        image: prod6,
    },

]

function ProductCards(){
    return(
    <>

    <div className={styles.cardTitle}>Explore Our Collection</div>
        <div className={styles.cardContainer}>
               
                {products.map((prod, index) => (
                     <div className={`${styles.cards}`} key={index}>
                        <div className={styles.cardImage} style={{backgroundImage: `url(${prod.image})`}}>
        
                         <div className={styles.overlay}>           
                        <h2 className={styles.head}>{prod.title}</h2>
                        <p className={styles.text}>{prod.description}</p>
                        <button className={styles.button}>{prod.button}</button>
                    </div>
                    </div>
                     </div>
                ))}
                       
                    
                   
                        </div>
    </>
    )
}
export default ProductCards;