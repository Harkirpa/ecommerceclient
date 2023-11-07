import React from "react";
import "../Css/Categorious.css"
import { Link } from "react-router-dom";

function Categorious() {
  return (
    <div className="categoriesContainer">
      <Link className="productLink" to="/Phones">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Mobile & Tablets
        </div>
      </Link>
      <Link className="productLink" to="/electronics">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?w=996&t=st=1699194050~exp=1699194650~hmac=cf03e278c1bcc83783cc0b86f406c778a92efa444b415a3fa25fde83674d8ea4"
                alt="img not found"
              />
            </div>
          </div>
          Electronics
        </div>
      </Link>
      <Link className="productLink" to="/Laptops">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70"
                alt="img not found"
              />
            </div>
          </div>
          Laptops
        </div>
      </Link>
      <Link className="productLink" to="/watches">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://img.freepik.com/free-photo/closeup-shot-golden-watch-isolated_181624-28492.jpg?w=360&t=st=1699193902~exp=1699194502~hmac=4e80706fd22dc801a783262b009a51195e0a1b5cb3b121b0b9afe54fbc575c16"
                alt="img not found"
              />
            </div>
          </div>
          Watches
        </div>
      </Link>
      <Link className="productLink" to="/books">
        <div className="itembox">
          <div className="itemImg">
            <div className="imgs ">
              <img
                className="image"
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?w=740&t=st=1699193849~exp=1699194449~hmac=ae1cbe0735d85cc819ba7b7db27004c4ca494d8e93d39bed6146f112dabcf33e"
                alt="img not found"
              />
            </div>
          </div>
        Books
        </div>
      </Link>
    </div>
  );
}

export default Categorious;