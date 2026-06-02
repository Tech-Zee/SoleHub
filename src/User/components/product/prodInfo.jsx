import styles from "./prodInfo.module.css";
import { Heart } from "lucide-react";
import { useState } from "react";

function ProdInfo({
  product,
  addToCart = () => {},
  increaseQty = () => {},
  decreaseQty = () => {},
  toggleWishlist = () => {},
  cart = [],
  wishlist = []
}) {

  const cartItem = cart?.find(
    (item) => item.id === product.id
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const quantity = cartItem?.quantity || 0;

  const isWishlisted = wishlist?.some(
    (item) => item.id === product.id
  );

  return (
    <div className={styles.card}>

      <div className={styles.cardContent}>
        <h3 className={styles.prodName}>
          {product.name}
        </h3>

        <p className={styles.prodDes}>
            {product.description}
        </p>
      
      
    <p className={styles.prodCategory}>
            {product.category}
        </p>
        <p className={styles.prodText}>
          Ratings: {product.rating}
        </p>


        <div className={styles.sizeButton}>

      <span className={styles.sizes}>
        Sizes
      </span>

      {[40, 41, 42].map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={
            selectedSize === size
              ? styles.activeSize
              : styles.sizeBtn
          }
        >
          {size}
        </button>
      ))}

    </div>
        <p className={styles.prodText}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
          <p className={styles.prodText}>
          ${product.price}
        </p>
        
      </div>

      <div className={styles.cartControls}>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className={styles.cart}
          >
            Add to Cart
          </button>
        ) : (
          <div className={styles.qtyBox}>

            <button
              onClick={() => decreaseQty(product.id)}
              className={styles.decrease}
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => increaseQty(product.id)}
              className={styles.increase}
            >
              +
            </button>

          </div>
        )}

        <button
          onClick={() => toggleWishlist(product)}
          className={`${styles.wishlist} ${
            isWishlisted ? styles.activeWishlist : ""
          }`}
        >
          <Heart
            size={24}
            fill={isWishlisted ? "orange" : "none"}
            color="orange"
          />
        </button>

      </div>

    </div>
    
  );
  
}

export default ProdInfo;