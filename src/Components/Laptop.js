import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { FaShoppingCart } from 'react-icons/fa'
import "../Css/ProdItem.css"
import { Link } from "react-router-dom";
function Laptop() {
const [laptop,setLaptop]=useState([]);
    useEffect(()=>{
        axios.get(`https://serverecommerce-5g49.onrender.com/api/laptop`)
           .then((data)=>setLaptop(data.data)) 
          .catch((e)=>console.log("error",e))
        },[])
    console.log(laptop)
  return (
   <>
    <Navbar/>
    <div className="productContainer">
        <div className="laptop_container">

          {
            laptop.map((item, index) => {
              return (
                <div className="prodContItem">
                  <Link to={`/single/${item.id}`} key={index}>
                    <div className="prodContItemImage">
                      <img src={item.Image} alt="Product Img" />
                    </div>
                    <h3 className="prodContItemHeading">{item.name.slice(0,50)}</h3>
                    <div className="dyProductRatingsCont">
                      <h3 className="dyProductOriPrice">₹ {item.MRP}</h3>
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

export default Laptop