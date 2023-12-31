import axios from "axios";
import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar";

function Login() {
  const navi = useNavigate();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const changeHandle = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(data);
   axios
      .post(`https://serverecommerce-5g49.onrender.com/login`, data)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        localStorage.setItem("token", res.data.token);
      if (res.data.token) {
     navi('/')
      }
      else{
        navi('/login')
      }
    })
      .catch((err) => {
        console.log(err);
      });
  };

    

  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="acontainer">
          <form className="formContainer">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={changeHandle}
                placeholder="Enter Email Id"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={changeHandle}
                placeholder="Enter Password"
              />
            </div>
            <button className="btn-submit" onClick={submitHandle}>
              Login
            </button>
          </form>
          <div className="text">
            <h1>Hey, Welcome to our Website!!!</h1>
            <h1>You haven't registered yet</h1>
            <Link to="/register">Click here to Register</Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;