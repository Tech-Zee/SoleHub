import CheckoutHeader from "./checkoutHeader";
import CheckoutForm from "./checkoutForm";
import CheckoutItems from "./checkoutItems";
import CheckoutSummary from "./checkoutSummary";
import PaymentMethod from "./paymentMethod";
import styles from "./checkout.module.css";

import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevents page refresh

    // ✅ cart validation
    if (!cart || cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // OPTIONAL: extra safety check (form validation already handled by HTML required)
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    navigate("/success");
  };

  return (
    <div className={styles.wrapper}>

      <CheckoutHeader />

      {/* ONE FORM WRAPS EVERYTHING */}
      <form onSubmit={handleSubmit} className={styles.checkWrapper}>

        <div className={styles.checkForm}>
          <CheckoutForm />
          <PaymentMethod />
        </div>


        <div className={styles.checkSum}>
          <CheckoutItems cart={cart} />
          <CheckoutSummary cart={cart} />
        </div>

      </form>

    </div>
  );
}

export default Checkout;