import React, { useState } from "react";
import SideBar from "../components/shop/SideBar";
import ProductGrids from "../components/shop/productGrids";
import { products } from "../components/shop/product";
import styles from "./shop.module.css";

function Shop({
  cart,
  wishlist,
  addToCart,
  increaseQty,
  decreaseQty,
  toggleWishlist
}) {

  // ===== FILTER STATES =====
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState(500);
  const [selectedRating, setSelectedRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedPick, setSelectedPick] = useState("all");

  // ===== FILTER PRODUCTS =====
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesPrice = product.price <= selectedPrice;

    const matchesRating = product.rating >= selectedRating;

    const matchesStock = !inStockOnly || product.inStock;

    const matchesPick =
      selectedPick === "all" ||
      (selectedPick === "bestsellers" && product.rating >= 4.5) ||
      (selectedPick === "newarrivals") ||
      (selectedPick === "discounteditems" && product.price < 100);

    return (
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesStock &&
      matchesPick
    );
  });

  return (
    <div className={styles.wrapper}>

      {/* SIDEBAR */}
      <div className={styles.side}>
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}

          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}

          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}

          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}

          selectedPick={selectedPick}
          setSelectedPick={setSelectedPick}
        />
      </div>

      {/* PRODUCTS */}
      <div className={styles.cards}>
        <ProductGrids
          products={filteredProducts}
          addToCart={addToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          toggleWishlist={toggleWishlist}
          cart={cart}
          wishlist={wishlist}
        />
      </div>

    </div>
  );
}

export default Shop;