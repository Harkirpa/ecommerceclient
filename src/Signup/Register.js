import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../Components/Navbar";

function Register() {
  const navi = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const changeHandle = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post(
        `https://serverecommerce-5g49.onrender.com/register`,
        data
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg)
        setData(res.data);
        localStorage.getItem("token", res.data.token);
   
     navi('/login')
      }
      )
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="acontainer">
          <div className="text">
            <h1>Hello There!!!</h1>
            <h1>Already Have an account?</h1>
            <Link to="/login">Then click here to Login</Link>
          </div>
          <form className="formContainer">
            <div>
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                id="name"
                onChange={changeHandle}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={changeHandle}
                placeholder="Enter Email"
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
              Register
            </button>
           
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
