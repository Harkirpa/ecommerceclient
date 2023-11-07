import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import { AiFillStar } from "react-icons/ai";
import "../Css/ProdItem.css"
import { Link } from "react-router-dom";
function Laptop() {
const [laptop,setLaptop]=useState([]);
    useEffect(()=>{
        axios.get(`https://ecommerce-4sw2.onrender.com/api/laptop`)
           .then((data)=>setLaptop(data.data)) 
          .catch((e)=>console.log("error",e))
        },[])
    console.log(laptop)
  return (
   <>
    <Navbar/>
   <div className="productContainer">
        {laptop.map((item,index)=>{
            return (
                <div className="laptop_container">
            <div className="prodContItem">
        <Link to={`/single/${item.id}`} key={index}>
          <div className="prodContItemData">
            <div className="prodContItemInfo">
              <div className="prodContItemImage">
                <img src={item.Image} alt="Product Img" />
              </div>
              <div className="prodContItemInfoDetails">
                <h3 className="prodContItemHeading">{item.name}</h3>
              
                  <div className="dyProductRatingsCont">
                    <div className="prodContRating">
                      {item.Rating} <AiFillStar />
                    </div>
                    <div className="dyProductOriPrice">{item.MRP}</div>
                  </div>
              </div>
            </div>
          </div>
          </Link>
      </div>
      <hr />
                </div>
            )
        }) 
                 
        }
        </div>
   
    

   </>
  )
}

export default Laptop