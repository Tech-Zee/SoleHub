import ProductCard from "./productCard";
import styles from "./productGrids.module.css";

function ProductGrids({
  products,
  addToCart,
  increaseQty,
  decreaseQty,
  toggleWishlist,
  cart,
  wishlist
}) {
  
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          toggleWishlist={toggleWishlist}
          cart={cart}
          wishlist={wishlist}
        />
      ))}
    </div>
  );
}

export default ProductGrids;