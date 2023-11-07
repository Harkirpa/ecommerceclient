import React from "react";
import "../Css/Home.css"
import { FcMoneyTransfer, FcOnlineSupport } from "react-icons/fc";
import {LiaShippingFastSolid} from "react-icons/lia"
const Shipping = () => {
  return (
    <div>
      <div className="quoteBanner"></div>
      <div className="companyPolicyInfo">
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <LiaShippingFastSolid/>
          </div>
          <div className="companyInfoHead">Free Shipping</div>
          <div className="companyInfoText">
          Welcome to our online store, where shopping just got even more rewarding! We're excited to introduce our exclusive Free Shipping offer, designed to make your shopping experience truly delightful.
          </div>
        </div>
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <FcMoneyTransfer />
          </div>
          <div className="companyInfoHead">100% Refund</div>
          <div className="companyInfoText">
          Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At Big Mart, your satisfaction is our top priority. We understand that sometimes things may not go as planned, and that's why we're proud to offer a 100% Refund Guarantee. With this assurance.
          </div>
        </div>
        <div className="companyInfo">
          <div className="companyInfoIcon">
            <FcOnlineSupport />
          </div>
          <div className="companyInfoHead">Support 24/7</div>
          <div className="companyInfoText">
          At Big Mart, your satisfaction is our priority, and that's why we're thrilled to offer 24/7 support. We understand that your needs don't follow a schedule, and neither do we. With our always-on support, you can shop, inquire, and resolve issues whenever it's convenient for you
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;