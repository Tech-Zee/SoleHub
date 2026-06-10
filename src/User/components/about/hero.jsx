import styles from "./hero.module.css"

function AboutHero(){
    return(
        <>
           <div className={styles.Herocontainer}>
                <p className={styles.heroText}>
                    "More than just Footwear - <br /> We're here to help you step confidently into every moment"
                </p>
           </div>
        </>
    )
}

export default AboutHero;