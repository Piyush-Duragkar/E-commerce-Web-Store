import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{cart, user}, dispatch]=useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://www.dghelp.com/wp-content/uploads/2019/12/DGHelp_GiftCard_Banner_Amazon-2000X600.jpg" alt=""/>
        {/* </div> */}

      <div>
        <h3>Hello, {user?.email}</h3>
        <h2 className="checkout_title">Your Cart Items</h2>
        {cart.map(item =>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}/>
        ))}

      </div>
    </div>
      
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
