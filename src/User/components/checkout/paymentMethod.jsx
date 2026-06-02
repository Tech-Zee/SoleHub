import styles from "./pay.module.css";

function PaymentMethod() {
  return (
    <div className={styles.wrap}>

      <div className={styles.pay}>
        <p>Payment</p>

        <input className={styles.input} type="text" placeholder="Card number" required />
        <input className={styles.input} type="text" placeholder="Cardholder name" required />

        <input className={styles.input} type="month" required />
        <input className={styles.input} type="tel" placeholder="CVV" required />

        <label className={styles.option}>
          <input type="radio" name="payment" required />
          Paypal
        </label>

        <label className={styles.option}>
          <input type="radio" name="payment" />
          Palmpay
        </label>
      </div>

      {/* IMPORTANT: NO LINK, NO NAVIGATION HERE */}
      <button type="submit" className={styles.btn}>
        PAY AND PLACE ORDER
      </button>

    </div>
  );
}

export default PaymentMethod;