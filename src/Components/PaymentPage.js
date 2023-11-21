import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { EmptyCart } from "../Redux/Cart";
import Navbar from "./Navbar";
import "../Css/CartPage.css";
function PaymentPage() {
    const dispatch = useDispatch();
  const data = useSelector((state) => state.Cart.cart);
  const total = data.reduce((acc, item) => {
    return acc + item.MRP * item.quantity;
  }, 0);
     const checkOutBtn = () => {
    toast.success("Order Placed successfully", {
      autoClose: 2000,
    });
    dispatch(EmptyCart());
  };

  return (
   <>
   <Navbar/>
   <div>
   <h1>Checkout</h1>
   <h2>Billing Details</h2>
   <label htmlFor='fname'> First Name</label>
   <input type='text' name='fname' required/>
   <br/>
   <label htmlFor='lname'>Last Name</label>
   <input type='text' name='lname' required/>
   <br/>
   <label htmlFor='street'>Street Address</label>
   <input type='text'  name='street'/>
   <br/>
   <label htmlFor='city'>Town/City</label>
   <input type='text' name='city'/>
   <br/>
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
                <button class="button-5" onClick={checkOutBtn}>
                  Checkout
                </button>
              </div>
            </div>
   </>
  )
}

export default PaymentPage