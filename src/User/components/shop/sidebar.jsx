import React from "react";
import styles from "./sidebar.module.css";
import { Star } from "lucide-react";

function SideBar({
  selectedCategory,
  setSelectedCategory,

  selectedPrice,
  setSelectedPrice,

  selectedRating,
  setSelectedRating,

  inStockOnly,
  setInStockOnly,

  selectedPick,
  setSelectedPick
}) {

  const categories = [
    { id: "all", label: "All Products" },
    { id: "sneakers", label: "Sneakers" },
    { id: "boots", label: "Boots" },
    { id: "sandals", label: "Sandals" },
    { id: "sports", label: "Sports" }
  ];

  const picks = [
    { id: "bestsellers", label: "Best Sellers" },
    { id: "newarrivals", label: "New Arrivals" },
    { id: "discountedItems", label: "Discounted Items" }
  ];

  return (
    <div className={styles.sideContainer}>

      {/* CATEGORY */}
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => setSelectedCategory(cat.id)}
              className={
                selectedCategory === cat.id
                  ? styles.active
                  : styles.categoryBtn
              }
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>

      {/* PRICE */}
      <h2>Price Filter</h2>
      <p>$0 - ${selectedPrice}</p>

      <input
        type="range"
        min={0}
        max={500}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
      />

      {/* RATING (FIXED — now fully restored) */}
      <h2>Rating</h2>

      <button
        onClick={() => setSelectedRating(4)}
        className={
          selectedRating === 4
            ? styles.active
            : styles.ratings
        }
      >
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} stroke="orange" />
        <span>&nbsp;& UP</span>
      </button>

      <br />

      <button
        onClick={() => setSelectedRating(3)}
        className={
          selectedRating === 3
            ? styles.active
            : styles.ratings
        }
      >
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} fill="orange" stroke="orange" />
        <Star size={16} stroke="orange" />
        <Star size={16} stroke="orange" />
        <span>&nbsp; & UP</span>
      </button>

      <br />

      <button
        onClick={() => setSelectedRating(0)}
        className={
          selectedRating === 0
            ? styles.active
            : styles.ratings
        }
      >
        All Ratings
      </button>

      {/* STOCK */}
      <h2>Availability</h2>

      <button
        onClick={() => setInStockOnly(true)}
        className={
          inStockOnly
            ? styles.active
            : styles.categoryBtn
        }
      >
        In Stock
      </button> 

      <button
        onClick={() => setInStockOnly(false)}
        className={
          !inStockOnly
            ? styles.active
            : styles.categoryBtn
        }
      >
        All Products
      </button>

      {/* QUICK PICKS */}
      <h2>Quick Picks</h2>

      <ul>
      {picks.map((pick) => (
  <li key={pick.id}>
    <button
      onClick={() => setSelectedPick(pick.id)}
      className={
        selectedPick === pick.id
          ? styles.active
          : styles.categoryBtn
      }
    >
      {pick.label}
    </button>
  </li>
))}
      </ul>

    </div>
  );
}

export default SideBar;