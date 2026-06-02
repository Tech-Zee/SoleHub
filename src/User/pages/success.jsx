import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
import styles from "./success.module.css"

function Success(){
    return(
        <div className={styles.container}>
            <h1>Order Successful</h1>
            <CircleCheckBig size={150} color="green"/>
            <p>Thank you for your purchase <br /> Your Order has been confirmed</p> 
            <Link to="/shop">Continue Shopping</Link>
        </div>
    )
}
export default Success;