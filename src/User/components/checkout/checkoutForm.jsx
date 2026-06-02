import styles from "./checkForm.module.css";

function CheckoutForm() {
  return (
    <div>

      <div className={styles.pInfo}>
        <p className={styles.pText}>Personal Information</p>

        <input className={styles.input} type="text" placeholder="First name" required />
        <input className={styles.input} type="text" placeholder="Last name" required />

        <input className={styles.input} type="tel" placeholder="Phone number" required />
        <input className={styles.input} type="email" placeholder="E-mail" required />
      </div>

      <div className={styles.sInfo}>
        <p className={styles.sText}>Shipping Information</p>

        <input className={styles.input} type="text" placeholder="Country / Region" required />
        <input className={styles.input} type="text" placeholder="Street" required />

        <input className={styles.input} type="text" placeholder="Address" required />
        <input className={styles.input} type="number" placeholder="Zip / Postal code" required />
      </div>

      <div className={styles.delivery}>
        <p>Delivery</p>

        <label className={styles.option}>
          <input type="radio" name="delivery" required />
          Standard Delivery
        </label>

        <label className={styles.option}>
          <input type="radio" name="delivery" />
          Express Delivery
        </label>
      </div>

    </div>
  );
}

export default CheckoutForm;