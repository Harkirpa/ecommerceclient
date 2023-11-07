import axios from "axios";
import { useEffect, useState } from "react";
import "../Css/Dynamic.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { AiFillStar } from "react-icons/ai";
function Single() {
    const { id } = useParams();
    const newid = parseInt(id);
    console.log(newid);
    const [mobileData, setMobileData] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://ecommerce-4sw2.onrender.com/api/dummy")
        .then((res) => setMobileData(res.data))
        .catch((err) => console.log(err));
    }, [id]);

  return (
    <>
    <Navbar />
      <div className="dynamicProdContainer">
          {mobileData
        .filter((item) => item.id === newid)
        .map((item, index) => {
                  return (
                    <div key={index} className="dyProductCont">
                      <div className="dyProductCont1">
                        <div className="dyProductImgCont">
                          <img
                            className="dyProductImg"
                            src={item.Image}
                            alt="img not found"
                          />
                        </div>
                        <div className="dyProductBtns">
                          <button className="btnAddCart">
                            Add to Cart
                          </button>
                          <button className="btnBuyNow">
                            Buy Now
                          </button>
                        </div>
                      </div>
                      <div className="dyProductDesc">
                        <div className="dyProductHead">{item.name}</div>
                          <div className="dyProductRatingsCont">
                            <div className="dyProductRating">
                              {item.Rating} <AiFillStar />
                            </div>
                            Ratings
                          </div>
                          </div>
                    </div>
                  );
                })}
         
      </div>
      </>
  
  )
            }
   export default Single;
