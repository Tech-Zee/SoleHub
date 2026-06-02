import styles from "./checkItems.module.css"


function CheckoutItems({cart}){
return (
      <div className={styles.cardWrapper}>
      {cart.map((item) => (

        <div className={styles.itemCard} key={item.id}>

          <div className={styles.imgBox}>
          <img className={styles.itemImg} src={item.image} alt="" />
          </div>

        <div>
          <p className={styles.text}>Name: {item.name}</p>
          <p className={styles.text}>QTY: {item.quantity}</p>
          <p className={styles.text}>Price: {item.price}</p>
        </div>
          
        </div>

      ))}
     

    </div>
)
}

export default CheckoutItems;