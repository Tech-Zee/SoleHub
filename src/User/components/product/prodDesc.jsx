import styles from "./prodDesc.module.css"

export default function ProductDescription({ product }) {
  return (
    <div className={styles.descWrapper}>
      <h3 className={styles.descTitle}>Description</h3>

      <p>
        The {product.name} is designed for comfort, durability, and everyday performance.
        Built with high-quality materials, it offers long-lasting wear and a premium feel.
      </p>

      <p>
        Perfect for {product.category} lovers, this shoe combines modern style with practical support,
        making it suitable for both casual outings and active use.
      </p>

      <p>
        Its lightweight structure ensures all-day comfort while maintaining strong grip and stability.
      </p>
    </div>
  );
}
