import styles from "./productCard.module.css";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  addToCart,
  increaseQty,
  decreaseQty,
  toggleWishlist,
  cart,
  wishlist
}) {

  const navigate = useNavigate();

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className={styles.card}>

      {/* 🧭 CLICKABLE AREA ONLY (does NOT remove anything) */}
      <div
        className={styles.clickArea}
        onClick={() => navigate(`/product/${product.id}`)}
      >

        <img
          src={product.image}
          alt={product.name}
          className={styles.cardImage}
        />

        <div className={styles.cardContent}>

          <h3 className={styles.prodName}>{product.name}</h3>

          <p className={styles.prodText}>${product.price}</p>

          {/* ✔ kept rating */}
          <p className={styles.prodText}>Ratings: {product.rating}</p>

          {/* ✔ kept stock */}
          <p className={styles.prodText}>
            {product.inStock ? (
              <span>In Stock</span>
            ) : (
              <span>Out of Stock</span>
            )}
          </p>

        </div>

      </div>

      {/* 🧩 ACTIONS */}
      <div className={styles.cartControls}>

        {/* 🛒 CART (unchanged logic) */}
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

        {/* ❤️ WISHLIST (unchanged logic) */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`${styles.wishlist} ${
            isWishlisted ? styles.activeWishlist : ""
          }`}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "orange" : "none"}
            color="orange"
          />
        </button>

      </div>

    </div>
  );
}