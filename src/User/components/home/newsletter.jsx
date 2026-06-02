import { React } from "react";
import styles from "./newsletter.module.css";

function NewsLetter(){
    return(
        <div className={styles.container}>
            <div className={styles.newsBox}>
                <div className={styles.newsText}>
                    <h1>
                    JOIN OUR COMMUNTIY
                    </h1>
                <p>
                    Be the first to discover fresh collections, wellness inspiration and special deals curated just for you.
                </p>
                </div>
                <div className={styles.newsForm}>
                    <input type="email" name="" id="" placeholder="Enter your e-mail" className={styles.email}/>
                    <button className={styles.newsBtn}>
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;