import React from 'react'
import Navbar from './Navbar'
import "../Css/ProdItem.css"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { AddtoCart } from '../Redux/Cart'
function Search() {
  const dispatch = useDispatch()
  const location = useLocation()
  const data = location.state
  console.log(data)
  return (
<>
      <Navbar />
      <div className="productContainer">
        <div className="laptop_container">
          {
            data.map((item, index) => {
              const {
                id = item.id,
                Image = item.Image,
                MRP = parseInt(item.MRP),
                name=item.name,
                quantity = item.quantity,
              } = item;
              return (
                <div className="prodContItem">
                <Link to={`/single/${item.id}`} key={index}>
                <div className="prodContItemImage">
                      <img src={item.Image} alt="Product Img" />
                    </div>
                    <h3 className="prodContItemHeading">{item.name}</h3>
                    <div className="dyProductRatingsCont">
                      <h3 className="dyProductOriPrice">₹{item.MRP}</h3>
                      <Link className="addtocartbtn"  state={{ index: item }} ><button className='adbtn' onClick={()=> dispatch(AddtoCart({ id, Image, name, MRP,quantity }))}><FaShoppingCart />  Add To Cart</button>
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

export default Search;

