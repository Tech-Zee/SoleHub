import styles from "./cartTable.module.css";

function CartTable({
  cart,
  increaseQty,
  decreaseQty
}) {

  return (
    <div className={styles.wrapper}>

      {cart.map((item) => (

        <div key={item.id} className={styles.card}>

          <img src={item.image} alt={item.name} className={styles.image}/>

          <div className={styles.info}>

            <h3 className={styles.name}>
              Name <br />
              {item.name}
            </h3>

            <p className={styles.category}>
              Category <br />
              {item.category}
            </p>

            <p className={styles.price}>
              Price <br />
              ${item.price}
            </p>

          </div>

          <div className={styles.qtyBox}>
          <h3> QTY</h3> 
            <button onClick={() => decreaseQty(item.id)} className={styles.btn}>
              -
            </button>

            <span className={styles.qty}>
              {item.quantity}
            </span>

            <button onClick={() => increaseQty(item.id)} className={styles.btn} >
              +
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default CartTable;