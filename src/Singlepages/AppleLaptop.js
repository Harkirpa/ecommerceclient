import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "../Components/Laptop";
import { FaShoppingCart } from 'react-icons/fa'
import "../Css/ProdItem.css"
const AppleLaptop=()=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`https://serverecommerce-5g49.onrender.com/api/laptop`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("error",e))
 },[])
    console.log("use effect",value)

    return( 
        <>
        <Navbar/>
        <div className="productContainer">
        <div className="laptop_container">
     {
       value&& value.filter((item)=>item.subcat==="Apple").map((item,index)=>{
            return(
                <div className="prodContItem">
                <Link to={`/single/${item.id}`} key={index}>
                <div className="prodContItemImage">
                      <img src={item.Image} alt="Product Img" />
                    </div>
                    <h3 className="prodContItemHeading">{item.name}</h3>
                    <div className="dyProductRatingsCont">
                      <h3 className="dyProductOriPrice">₹{item.MRP}</h3>
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
export default AppleLaptop