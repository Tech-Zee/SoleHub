import styles from "./banner.module.css"
import ban from '../assets/banner.png';

function Banner(){
    return(
        <>

        <div className={styles.banner}>
            <div className={styles.bannerText}>
                <h1>Every step tells your story</h1>
                <p>Discover footwear built for confidence, comfort and everyday life</p>
                 <button className={styles.button}>
            Explore Shoes
            </button>
            </div>
            <div className={styles.bannerImage}>
                <img className={styles.banImg} src={ban} alt="" />
            </div>
           
        </div>
        </>
    )
}

export default Banner;