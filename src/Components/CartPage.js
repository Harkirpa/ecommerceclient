import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../Redux/Cart";
import Navbar from "./Navbar";
import "../Css/CartPage.css";
import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
const CartPage = () => {
  const dispatch = useDispatch();
  // const navi=useNavigate();
  const data = useSelector((state) => state.Cart.cart);
  console.log(data)
  const total = data.reduce((acc, item) => {
    return acc + item.MRP * item.quantity;
  }, 0);
  const makePayment = async()=>{
    const stripe = await loadStripe("pk_test_51OFWLzSIxNWsH91sny6yBVq3nkWJ2xLiwgmY86xfjzCpipl7jXxTVatZu1ILzPzOuTI13XEyFDZned4vUuHZ2QMu00f7DkYzXN");

    const body = {
        products:data
    }
    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:4000/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}
  console.log(total)
  const handleIncreaseQuantity = (id) => {
    dispatch(IncreaseQuantity({ id }));
  };
  const handleDecreaseQuantity = (id) => {
    dispatch(DecreaseQuantity({ id }));
  };
  // const checkOutBtn = () => {
  //   toast.success("Order Placed successfully", {
  //     autoClose: 2000,
  //   });
  //   dispatch(EmptyCart());
  // };

  return (
    <>
      <Navbar />
      <div className="container cartContainer">
        {data.length ? (
          <>
          <div className="cartItemsCol">
              <div>
                {data &&
                  data.map((item, index) => {
                    return (
                      <div className="cartItem" key={index}>
                        <div className="cartItemSubPart">
                          <div className="cartItemImage">
                            <img src={item.Image} alt="Loading..." />
                          </div>
                          <div className="cartItemDesc">
                            <div className="cartItemHead">{item.name}</div>
                            <button
                              className="cartItemRemoveBtn"
                              onClick={() =>
                                dispatch(RemoveItem({ id: item.id }))
                              }
                            >
                              Remove
                            </button>
                            <button
                              className="quantity-btn"
                              onClick={() => handleDecreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              className="quantity-btn"
                              onClick={() => handleIncreaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                 
                 
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <div className="cartItemPriceDetials">
                <div className="PriceDetailsHead">Price Details</div>
                <div className="cartItemPriceCalcu">
                  <div className="row">
                    <div>Price({data.length} item)</div>
                    {data &&
                  data.map((item, index) => {
                    return (
                    <div className="cartItemPricings">
                          <div className="cartItemDiscount">
                            {"₹ "+ item.MRP * item.quantity}
                         
                          </div>

                        </div>
                            );
                          })} 
                  </div>
                  <div className="row">
                    <div>Delivery Charges</div>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div
                        style={{
                          textDecoration: "line-through",
                          fontWeight: "400",
                          color: "gray",
                        }}
                      >
                        ₹80
                      </div>
                      <div className="discountGreen">Free</div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      margin: "20px 0",
                      fontWeight: "800",
                      fontSize: "1rem",
                    }}
                  >
                    <div>Total Amount</div>
                    <div>
                      <div>
                        ₹{total}

                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
              <div className="paymentBtns">
                <button class="button-5" onClick={makePayment}>
                  CheckOut
                  
                </button>
            
              </div>
            </div>
          </>
        ) : (
          <div className="cartEmptyCont">
            Your Cart is Empty. Add the products from the products list to
            display it to cart
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};
export default CartPage;