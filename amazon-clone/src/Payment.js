import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    const handelSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART'
            })

            navigate("/orders", {replace: true})
        })
    }

    const handelChange = event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.message:"");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>Checkout (<Link to="/checkout">{cart?.length} items</Link>)</h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>777 Jackpot Street</p>
                    <p>Los Angeles, CA</p>
                </div>
                 
            </div>


            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
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


                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                        <form onSubmit={handelSubmit}>
                            <CardElement onChange={handelChange}/>
                            <div className='payment_priceContainer'>
                            <CurrencyFormat 
                            renderText={(value)=>(
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}    
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'$'}
                                />
                                <button disabled={processing || disabled ||succeeded}>
                                    <span>{processing?<p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
            </div>

        </div>
      
    </div>
  )
}

export default Payment
