import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();


    return (
    <div className="checkout">
        <div className="checkout_left">
        <img className="checkout_add" 
        src="https://seriousdatings.com/assets/images/ad-banner.jpg"
        alt="" 
        />
        {basket?.length === 0 ? (
            <div> 
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have no items in your basket. To buy one or 
                    "Add to basket" next to the item.
                </p>
                </div>
                ) : (
                <div> 
                    <h2 className="chackout_title">Your Shoping Basket</h2>
                    {/* List out all of the checkout Products */}
                    {basket.map(item => (
                           <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                           />   
                  ))}
                </div>  
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
    </div>
    ) 
}

export default Checkout
