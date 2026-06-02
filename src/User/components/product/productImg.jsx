import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./productImg.module.css"

function ProductImages({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = product?.images || [];

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* MAIN IMAGE */}
      <div className={styles.mainImg}>
        <img
          src={images[currentIndex]}
          alt="product"
          
        />
      </div>

      {/* CONTROLS */}
      <div className = {styles.controls} style={{ marginTop: "10px" }}>
        <button onClick={prevImage} className={styles.control}>
          <ArrowLeft color="white" size={24}/>
        </button>

        <button onClick={nextImage} className={styles.control}>
          <ArrowRight  color="white" size={24}/>
        </button>
      </div>

    </div>
  );
}

export default ProductImages;