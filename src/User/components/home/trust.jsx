import styles from './trust.module.css';
import { Truck, SportShoe, Lock , Undo2, Star, Ruler} from 'lucide-react';
function Trust(){
    return(
        <>
        <div className={styles.cardTitle}>Why Shop With Us</div>
        <p className={styles.cardParagraph}>We combine comfort, style, and quality to give you the best footwear experience online.</p>
            <div className={styles.cardContainer}>

            <div className={styles.card}>
                    <div className={styles.icon}> <SportShoe color='#ff9500' size={24} /></div>
                    <h2>Premium Quality </h2>
                    <p>
                    Crafted with durable materials to give you comfort, style, and long-lasting wear.
                </p>
            </div>
            <div className={styles.card}>
                 <div className={styles.icon}> <Truck color='#ff9500' size={24} /></div>
                    <h2>Fast Delivery </h2>
                    <p>
                    Get your favorite pairs delivered quickly and reliably right to your doorsteps.
                </p>
            </div>
            <div className={styles.card}>
                 <div className={styles.icon}> <Undo2 color='#ff9500' size={24} /></div>
                    <h2>Easy Returns </h2>
                    <p>
                    Shop with confidence.
                    Our simple return process makes exchanges stress-free.
                </p>
            </div>
            <div className={styles.card}>
                 <div className={styles.icon}> <Lock color='#ff9500' size={24} /></div>
                    <h2>Secure Payments </h2>
                    <p>
                    Our transactions are fully protected with safe and secure checkout options for a worry-free shopping experience.
                </p>
            </div>
            <div className={styles.card}>
                 <div className={styles.icon}> <Star color='#ff9500' size={24} /></div>
                    <h2>Trusted by Customers </h2>
                    <p>
                    Loved by customers for quality, comfort and consistent service that is reliable.
                </p>
            </div>
            <div className={styles.card}>
                 <div className={styles.icon}> <Ruler color='#ff9500' size={24} /></div>
                    <h2>Perfect Fit</h2>
                    <p>
                   Find your ideal size with ease using our accurate sizing guide designed to help you choose confidently.
                </p>
            </div>


            </div>
        </>
    )
}

export default Trust;