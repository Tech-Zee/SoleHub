import { products } from "../shop/product";
import styles from "./likeProd.module.css";
import { useNavigate } from "react-router-dom";

function LikeProducts({ product }) {
  const navigate = useNavigate();

  const similar = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <div>
      <h3 className={styles.gridTitle}>
        Explore Related Products
      </h3>

      <div className={styles.grid}>
        {similar.map((item) => (
          <div
            key={item.id}
            className={`${styles.gridCard} ${styles.clickArea}`}
            onClick={() => navigate("/shop")}
          >
            <img
              src={item.image}
              alt={item.name}
              className={styles.itemImg}
            />

            <p className={styles.gridName}>
              {item.name}
            </p>

            <p className={styles.gridPrice}>
              Price: ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikeProducts;