import styles from "./prodDev.module.css"


export default function ProductDelivery() {
  return (
    <div className={styles.devWrapper}>
      <h3 className={styles.devTitle}>Delivery Information</h3>

      <p>
        We offer fast and reliable delivery across all regions.
      </p>

      <ul className={styles.list}>
        <li>Standard Delivery: 2 - 5 working days</li>
        <li>Express Delivery: 24 - 48 hours (selected locations)</li>
        <li>Free delivery on orders above $100</li>
      </ul>

      <p>
        Once your order is confirmed, you will receive tracking details via email or SMS.
      </p>

      <p>
        Returns are accepted within 7 days of delivery if the product is unused and in original packaging.
      </p>
    </div>
  );
}