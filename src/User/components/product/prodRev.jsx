import styles from "./prodReviews.module.css";
import { Star } from "lucide-react";

function ProductReviews({ product }) {
  const reviews = [
    {
      id: 1,
      name: "Ayo Johnson",
      rating: 5,
      comment: `I love the ${product.name}. Super comfortable and stylish.`,
    },
    {
      id: 2,
      name: "Sarah Bello",
      rating: 4,
      comment: "Great quality and fast delivery.",
    },
    {
      id: 3,
      name: "Michael Ade",
      rating: 4.5,
      comment: "Very solid build. Worth the price.",
    },
  ];
  

  return (
    <div className={styles.wrapper}>

      <div className={styles.rating}>
        <h3 className={styles.ratingTitle}>Ratings & Reviews</h3>

        <span className={styles.number}>
          {product.rating}
        </span>

        <span className={styles.num2}> /5 </span>
      </div>

      <div className={styles.review}>
        <h3 className={styles.reviewTitle}>Customer Reviews</h3>

        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <h4>{review.name}</h4>

            {/* ⭐ STAR RENDER FIX */}
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  color={star <= Math.floor(review.rating) ? "gold" : "#ccc"}
                  fill={star <= Math.floor(review.rating) ? "gold" : "none"}
                />
              ))}
            </div>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProductReviews;