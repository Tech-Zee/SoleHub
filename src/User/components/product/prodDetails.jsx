import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../shop/product.js";
import styles from "../product/prodDetails.module.css";
import ProductImages from "./productImg";
import ProductInfo from "./prodInfo";
import ProductSizes from "./prodSizes";
// import ProductActions from "./prodActions";
import ProductReviews from "./prodRev";
import ProductDelivery from "./prodDev"
import ProductDescription from "./prodDesc";
import LikeProducts from "./likeProd.jsx";

function ProdDetails({
  addToCart,
  increaseQty,
  decreaseQty,
  toggleWishlist,
  cart,
  wishlist
}) {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const [activeTab, setActiveTab] = useState("desc");

  if (!product) return <h2>Not found</h2>;

  return (
    <div className={styles.wrapper}>

      {/* TOP SECTION */}
      <div className={styles.prodTop}>

        <div className={styles.prodImg}>
          <ProductImages product={product} />
        </div>

        <div className={styles.prodInfo}>
          <ProductInfo
            product={product}
            addToCart={addToCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            toggleWishlist={toggleWishlist}
            cart={cart}
            wishlist={wishlist}
          />

          <ProductSizes product={product} />
          {/* <ProductActions product={product} /> */}
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className={styles.prodBottom}>

        {/* TAB BUTTONS */}
        <div className={styles.prodLinks}>

        <button
  onClick={() => setActiveTab("desc")}
  className={`${styles.links} ${activeTab === "desc" ? styles.active : ""}`}
>
  Description
</button>
          <button
            onClick={() => setActiveTab("review")}
            className={`${styles.links} ${activeTab === "review" ? styles.active : ""}`}
          >
            Reviews
          </button>

          <button
            onClick={() => setActiveTab("delivery")}
            className={`${styles.links} ${activeTab === "delivery" ? styles.active : ""}`}
          >
            Delivery
          </button>

        </div>

        {/* TAB CONTENT */}
        {activeTab === "desc" && (
          <ProductDescription product={product} />
        )}

        {activeTab === "review" && (
          <ProductReviews product={product} />
        )}

        {activeTab === "delivery" && (
          <ProductDelivery product={product} />
        )}

      </div>
  <LikeProducts product={product}/>
    </div>
  );
}

export default ProdDetails;