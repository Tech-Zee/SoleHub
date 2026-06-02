import CartHeader from "../components/cart/cartHeader";
import CartTable from "../components/cart/cartTable";
import CartSummary from "../components/cart/cartSummary";

import styles from "./cart.module.css";

function Cart({
  cart,
  increaseQty,
  decreaseQty
}) {

  return (
    <div className={styles.wrapper}>

      <CartHeader cart={cart} />

      {cart.length === 0 ? (

        <div className={styles.emptyCart}>
          <h2>Your cart is empty 🛒</h2>
        </div>

      ) : (

        <div className={styles.cartContent}>

          {/* LEFT SIDE */}
          <div className={styles.left}>

            <CartTable
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />

          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>

            <CartSummary
              cart={cart}
            />

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;