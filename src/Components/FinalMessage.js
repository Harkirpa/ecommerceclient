import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {EmptyCart}  from "../Redux/Cart";
import Navbar from "./Navbar";
const FinalMessage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoToHomePage = () => {
    dispatch(EmptyCart());
    // Replace '/home' with the path of your home page
    navigate("/");
  };
  return (
    <>
  <Navbar/>
    <div>
      <div className="centerdivforMessage">
        <h1>Thanks for Shopping with Us 😊😊😊</h1>
        <h2>Come Again</h2>
      </div>

      <div class="finalbutton">
        <button onClick={handleGoToHomePage}>Home Page</button>
      </div>
    </div>
    </>
    
  );
};

export default FinalMessage;