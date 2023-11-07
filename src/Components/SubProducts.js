import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/Product.css";
import ProdItem from "./ProdItem"
import axios from "axios";
import Navbar from "./Navbar";

const SubProducts = () => {
  const routeData = useParams().category;
  const routeSubData = useParams().subcat;

  console.log(routeData, routeSubData);
  const [apiData, setApiData] = useState();
  useEffect(() => {
    axios.get(
      `https://ecommerce-4sw2.onrender.com/api/blog`
    ).then((data) => {
      setApiData(data.data);
    });
  }, [routeData, routeSubData]);


  return (
    <>
      <Navbar />
        <div className="productContainer">
          <div className="Title">
            {routeData} &gt; {routeSubData}
          </div>
          <div>
            <div>
              {apiData &&
                apiData.map((item, index) => {
                  // console.log(item);
                  return (
                    <div key={index}>
                      <ProdItem
                        id={item.id}
                        name={item.name}
                        Image={item.Image}
                        rating={item.rating}
                        category={item.category}
                        subcat={item.subcat}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
     
    </>
  );
};

export default SubProducts;