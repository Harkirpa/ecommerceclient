import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveItem, EmptyCart } from "../Redux/Cart";
import Navbar from "./Navbar";
import "../Css/CartPage.css";
import { ToastContainer, toast } from "react-toastify";


const CartPage = () => {
  const dispatch = useDispatch();
  const [priceDetails, setPriceDetails] = useState({
    totalOrigPrice: 0,
    buyMoreSaveMore: 0,
    totalCartAmount: 0,
    totalSaveCart: 0,
  });
  const data = useSelector((state) => state.Cart.cart);
  // console.log(data);
  useEffect(() => {
    setPriceDetails({
      totalOrigPrice: data.reduce((acc, obj) => {
        return acc + Number(obj.price.replaceAll(",", ""));
      }, 0),
      totalDiscount: data.reduce((acc, obj) => {
        if (obj.discount) {
          return (
            acc +
            (Number(obj.price.replaceAll(",", "")) -
              Number(obj.discount.replaceAll(",", "")))
          );
        }
        return acc;
      }, 0),
      buyMoreSaveMore: data.length * 100,
    });
  }, [data]);
  console.log(priceDetails);
  const checkOutBtn = () => {
    toast.success("Order Placed successfully", {
      autoClose: 2000,
    });
    dispatch(EmptyCart());
  };
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
                    // console.log(item);
                    return (
                      <div className="cartItem" key={index}>
                        <div className="cartItemSubPart">
                          <div className="cartItemImage">
                            <img src={item.image} alt="Product Img" />
                          </div>
                          <div className="cartItemDesc">
                            <div className="cartItemHead">{item.heading}</div>
                            <button
                              className="cartItemRemoveBtn"
                              onClick={() =>
                                dispatch(RemoveItem({ id: item._id }))
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cartItemPricings">
                          {item.discount ? (
                            <>
                              <div className="cartItemDiscount">
                                ₹{item.discount}
                              </div>
                              <div className="cartItemPrice">₹{item.price}</div>
                              <div className="cartItemPercent">
                                {item.percent} %
                              </div>
                            </>
                          ) : (
                            <div className="cartItemDiscount">
                              ₹{item.price}
                            </div>
                          )}
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
                    <div>
                      ₹ {priceDetails.totalOrigPrice.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div className="row">
                    <div>Discount</div>
                    <div className="discountGreen">
                      - ₹ {priceDetails.totalDiscount.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div className="row">
                    <div>Buy more & save more</div>
                    <div className="discountGreen">
                      - ₹ {priceDetails.buyMoreSaveMore.toLocaleString("en-IN")}
                    </div>
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
                        ₹
                        {(
                          priceDetails.totalOrigPrice -
                          priceDetails.totalDiscount -
                          priceDetails.buyMoreSaveMore
                        ).toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="discountGreen"
                    style={{ fontSize: "0.9rem", fontWeight: "700" }}
                  >
                    You will save ₹
                    {(
                      priceDetails.totalDiscount + priceDetails.buyMoreSaveMore
                    ).toLocaleString("en-IN")}{" "}
                    on this order
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