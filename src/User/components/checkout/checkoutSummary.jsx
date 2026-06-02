import styles from "./checkSum.module.css";

function CheckoutSummary({ cart }) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 🚚 shipping rule
  const shipping = subtotal > 0 ? 10 : 0;

  // 🧾 tax (5%)
  const tax = subtotal * 0.05;

  // 💰 final total
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.summary}>

      <h2 className={styles.title}>Order Summary</h2>
        
      <div className={styles.row}>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Shipping:</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className={styles.totalRow}>
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

    </div>
  );
}

export default CheckoutSummary;