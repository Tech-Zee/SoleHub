import styles from "./checkHeader.module.css"

function CheckoutHeader(){
    return(
        <div className={styles.headWrapper}>

            <h1 className={styles.checkTitle}>CHECKOUT</h1>
            {/* <p className={styles.checkParagraph}>Complete your order securely</p> */}

        </div>
    )
}

export default CheckoutHeader