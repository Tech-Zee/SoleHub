import styles from "./cartHeader.module.css";

function CartHeader({ cart }) {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className={styles.header}>

      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          Shopping Cart
        </h1>

        <p className={styles.subtitle}>
          You have {totalItems} item
          {totalItems !== 1 ? "s" : ""} in your cart
        </p>
      </div>

    </div>
  );
}

export default CartHeader;