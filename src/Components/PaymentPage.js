import React from 'react'
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { EmptyCart } from "../Redux/Cart";
import Navbar from "./Navbar";
import "../Css/CartPage.css";
import { useNavigate } from 'react-router-dom';
function PaymentPage() {
  // const dispatch = useDispatch();
  const navigator = useNavigate();
  const data = useSelector((state) => state.Cart.cart);
  const total = data.reduce((acc, item) => {
    return acc + item.MRP * item.quantity;
  }, 0);
  return (
    <>
      <Navbar />

      <h1 className="checkout">CheckOut</h1>

      <div className="container cartContainer">
        <form>
          <div className="cartItemsCol">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="cartItemsCol">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="cartItemsCol">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="cartItemsCol">
            <label htmlFor="card">Credit Card Number:</label>
            <input type="text" id="card" name="card" required />
          </div>

          <div className="cartItemsCol">
            <label htmlFor="expiry">Card Expiry:</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" />
          </div>
        </form>



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
                          {"₹ " + item.MRP * item.quantity}

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
            <button class="button-5" onClick={() => navigator('/final')}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage