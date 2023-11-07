import axios from "axios"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SingleProdPag=()=>{
   const [value,setValue]=useState("");
   useEffect(()=>{
      axios.get(`https://ecommerce-4sw2.onrender.com/api/books`)
      .then((data)=>setValue(data.data)) 
     .catch((e)=>console.log("error",e))
 },[])
    console.log("use effect",value)

    return( 
        <>
        <Navbar/>
     {
       value&& value.filter((item)=>item.subcat==="nonfiction").map((item,index)=>{
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
export default SingleProdPag