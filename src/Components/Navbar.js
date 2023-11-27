import React ,{useState}from "react";
import { Link, NavLink } from "react-router-dom";
import "../Css/Navbar.css";
import axios from "axios";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import {  toast } from "react-toastify";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [query, setQuery] = useState("");
  const[result,setResults]=useState([])
  const HandleChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    try {
      const response = await axios.get(
        `https://serverecommerce-5g49.onrender.com/search?category=${inputValue}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const Dropdown = () => {
    setIsMobile(isMobile);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const data = useSelector((state) => state.Cart.cart);
  const logoutbtn = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully", {
      autoClose: 2000,
    });
    window.location.reload(false);
  };

 return (
    <div className="NavbarContainer">
<div className="ContainerMain">
        <div className="brandLogo">
          <span className="Logo1">B</span>
          <span className="Logo2">I</span>
          <span className="Logo3">G</span>
          <span className="Logo4">M</span>
          <span className="Logo5">A</span>
          <span className="Logo6">R</span>
          <span className="Logo7">T</span>
        </div>
        <img
            onClick={() => setIsMobile(!isMobile)}
            className="Burger_Icon"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/menu--v7.png"
            alt="icon not found"
          />
        <input
          className="searchInput"
          type="text"
          placeholder="Search for Products, Brands or More"
          value={query}
          onChange={HandleChange}
        
        />{""}
           <Link to="/search" state={result}>
              <button className="logosearchbar">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </Link>
        <div className="userActions">
          <Link className="" to="/cart">
            <div className="cartIcon">
              <LuShoppingCart />
               <div className="cartCount">{data.length}</div>
            </div>
          </Link>
          {localStorage.getItem("token") ? (
            <button className="btnlogout" onClick={logoutbtn}>
              Logout
            </button>
          ) : (
            <Link className="" to="/login">
              <button className="btnlogout">Login</button>
            </Link>
          )}
      
        </div>
      </div>
      <div className="navbarRoutes" id={isMobile? "DropDown" : "Navbar"}>
        <NavLink activeclassname="active"  onClick={Dropdown} className="navbarLink" to="/">
          Home
        </NavLink>

        <div class="subnav">
          <NavLink activeclassname="active" onClick={Dropdown} className="navbarLink" to="/mobiles">
            Mobile & Tablets 
          </NavLink>
          <div class="subnav-content">
            <Link to="/mobiles/samsung">SAMSUNG</Link>
            <Link to="/mobiles/iphone">IPHONE</Link>
            <Link to="/mobiles/vivo">VIVO</Link>
            <Link to="/mobiles/redmi">REDMI</Link>
           </div>
        </div>
        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/electronics" onClick={Dropdown}
          >
            Electronics
          </NavLink>
          <div class="subnav-content">
            <Link to="/electronics/bluetooth">BLUETOOTH SPEAKERS</Link>
            <Link to="/electronics/soundbars">SOUNDBARS</Link>
            <Link to="/electronics/hometheatres">HOME THEATRES</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/laptop" onClick={Dropdown}
          >
            Laptops 
          </NavLink>
          <div class="subnav-content">
            <Link to="/laptop/asus">ASUS</Link>
            <Link to="/laptop/hp">HP</Link>
            <Link to="/laptop/apple">APPLE</Link>
          </div>
        </div>

        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/watches" onClick={Dropdown}
          >
            Watches
          </NavLink>
          <div class="subnav-content">
            <Link to="/watches/titan">TITAN</Link>
            <Link to="/watches/fastrack">FASTRACK</Link>
            <Link to="/watches/sonata">SONATA</Link>
          </div>
        </div>
        <div class="subnav">
          <NavLink
            activeclassname="active"
            className="navbarLink"
            to="/books" onClick={Dropdown}
          >
            Books
          </NavLink>
          <div class="subnav-content">
            <Link to="/books/literature">LITERATURE</Link>
            <Link to="/books/nonfiction">NON FICTION</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;