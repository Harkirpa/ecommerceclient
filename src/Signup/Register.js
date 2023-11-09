import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Components/Navbar";

function Register() {
  const navi = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [regSer, setregSer] = useState();
  const changeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputs);
    axios
      .post(
        `https://ecommerce-4sw2.onrender.com/api/register`,
        inputs
      )
      .then((res) => {
        console.log(res.data);
        setregSer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (regSer) {
      localStorage.setItem("token", regSer.token);
      if (regSer.msg === "User is registered successfully") {
        toast.success(regSer.msg, {
          autoClose: 2000,
        });
        setTimeout(() => {
          navi("/login");
        }, 3000);
      } else {
        toast.error(regSer.msg);
      }
    }
  }, [regSer, navi]);
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
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
            <div>
              <label htmlFor="password"> Confirm Password</label>
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
