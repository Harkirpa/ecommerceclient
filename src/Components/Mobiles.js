import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { FaShoppingCart } from 'react-icons/fa'
import "../Css/ProdItem.css"
import { Link } from "react-router-dom";
function Mobiles() {
  const [watch, setWatch] = useState([]);
  useEffect(() => {
    axios
      .get(`https://serverecommerce-5g49.onrender.com/api/blog`)
      .then((data) => setWatch(data.data))
      .catch((e) => console.log("error", e))
  }, [])
  console.log(watch)
  return (
    <>
      <Navbar />
      <div className="productContainer">
        <div className="laptop_container">

          {
            watch.map((item, index) => {
              return (
                <div className="prodContItem">
                  <Link to={`/single/${item.id}`} key={index}>
                    <div className="prodContItemImage">
                      <img src={item.Image} alt="Product Img" />
                    </div>
                    <h3 className="prodContItemHeading">{item.name}</h3>
                    <div className="dyProductRatingsCont">
                      <h3 className="dyProductOriPrice">{item.MRP}</h3>
                      <Link className="addtocartbtn" state={{ index: item }} ><button className='adbtn'><FaShoppingCart />  Add To Cart</button>
                      </Link>
                    </div>
                    </Link>
                </div>
                )
            })

          }
        </div>

      </div>




    </>
  )
}

export default Mobiles