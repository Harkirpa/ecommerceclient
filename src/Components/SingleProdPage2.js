import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SingleProdPag2=()=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`https://ecommerce-4sw2.onrender.com/api/books`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("eeror",e))
 },[])
    console.log("use effect",value)

    return( 
        <>
        <Navbar/>
     {
       value&& value.filter((item)=>item.subcat==="literature").map((item,index)=>{
            return(
                <Link to={`/single/${item.id}`} key={index}>
                    <h1>{item.name}</h1>
                    </Link>
            )
        })
     }
        
       
        </>
    ) 
}
export default SingleProdPag2