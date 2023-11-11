import axios from "axios";
import { useEffect, useState } from "react";
import "../Css/Dynamic.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../Redux/Cart";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
function Single() {
  const notify = () => toast(`Item is add on cart `);
  const [verified, setVerified] = useState(false);

    const { id } = useParams();
    const newid = parseInt(id);
    const dispatch = useDispatch();
    console.log(newid);
    const [mobileData, setMobileData] = useState([]);
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
  
      axios
        .get("https://ecommerce-4sw2.onrender.com/api/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setVerified(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
    useEffect(() => {
      axios
        .get("https://ecommerce-4sw2.onrender.com/api/dummy")
        .then((res) => setMobileData(res.data))
        .catch((err) => console.log(err));
    }, [id]);
    const onAddCart = () => {
      mobileData
        .filter((item) => item.id === newid)
        .map((dataprod) => {
          // console.log(dataprod);
          const { id, Image, name,  MRP } = dataprod;
          // console.log(id, image, heading);
          if (verified) {
           dispatch(AddtoCart({ id, Image,name,MRP }));
          notify()
          }
        else {
          alert("Please log in first to add to cart.");
        }
          return null;
        });
    };

  return (
    <>
    <Navbar />
      <div className="dynamicProdContainer">
          {mobileData
        .filter((item) => item.id === newid)
        .map((item, index) => {
                  return (
                    <div key={index} className="dyProductCont">
                      <div  className="dyProductImg">
                          <img
                            src={item.Image}
                            alt="img not found"
                          />
                          </div>
                           <div className="dyProductDesc">
                                 <h4>{item.name}</h4>
                          <div className="dyProductRatingsCont">
                            <div className="dyProductRating">
                              {item.Rating} <AiFillStar />
                            </div>
                            Ratings
                          </div>
                          </div>
                      <h2 className="Mrp">
                              {item.MRP}
                            </h2>
                          <ul>
                            <li>{item.Availabeoffer1}</li>
                            <li>{item.Availabeoffer2}</li>
                          </ul>
                    <div className="dyProductBtns">
                          <button className="btnAddCart" onClick={onAddCart}>
                            Add to Cart
                          </button>
                        </div>
                    
                     
                        </div>
                  );
                })}
         
      </div>
      </>
  
  )
            }
   export default Single;
