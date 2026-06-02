import styles from "./cartSummary.module.css";
import { Link } from "react-router-dom";

function CartSummary({ cart }) {

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const tax = subtotal * 0.05;

  const total = subtotal + shipping + tax;

  return (
    <div className={styles.summary}>

      <h2 className={styles.title}>
        Order Summary
      </h2>

      <div className={styles.row}>
        <span>Subtotal: </span>
        <span> ${subtotal.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Shipping: </span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <div className={styles.row}>
        <span>Tax: </span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className={styles.totalRow}>
        <span>Total: </span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className={styles.checkoutBtn}>
        <Link to="/checkout" className={styles.link}>
        Proceed To Checkout      
        </Link>
      </button>

    </div>
  );
}

export default CartSummary;