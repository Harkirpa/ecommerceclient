import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer"
import Error from "./Components/Error";
import Home from "./Components/Home";

import Electronics from "./Components/Electronics";
import Watches from "./Components/Watches";
import Books from "./Components/Books";
import Laptop from "./Components/Laptop";
import Mobiles from "./Components/Mobiles";
import Sonata from "./ProductPages/watches/Sonata";
import Titan from "./ProductPages/watches/Titan";
import Fastrack from "./ProductPages/watches/Fastrack";
import Literature from "./ProductPages/books/Literature";
import Nonfiction from "./ProductPages/books/Nonfiction"
import Single from "./Components/Single";
import Samsung from "./ProductPages/mobiles/Samsung";
import Vivo from "./ProductPages/mobiles/Vivo";
import Iphone from "./ProductPages/mobiles/Iphone";
import Redmi from "./ProductPages/mobiles/Redmi";
import Hp from "./ProductPages/laptop/Hp";
import Login from "./Signup/Login";
import Register from "./Signup/Register";
import Apple from "./ProductPages/laptop/Apple";
import Asus from "./ProductPages/laptop/Asus";
import Bluetooth from "./ProductPages/electronics/Bluetooth";
import Soundbars from "./ProductPages/electronics/Soundbars";
import Hometheatre from "./ProductPages/electronics/Hometheatre";
import CartPage from "./Components/CartPage";


import Success from "./Components/Success";
import Cancel from "./Components/Cancel"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/books" element={<Books />} />

          <Route path="/single/:id" element={<Single />} />

          <Route path="/watches/sonata" element={<Sonata />} />
          <Route path="/watches/titan" element={<Titan />} />
          <Route path="/watches/fastrack" element={<Fastrack />} />

          <Route path="/books/nonfiction" element={<Nonfiction />} />
          <Route path="/books/literature" element={<Literature />} />

          <Route path="/mobiles/samsung" element={<Samsung />} />
          <Route path="/mobiles/iphone" element={<Iphone />} />
          <Route path="/mobiles/vivo" element={<Vivo />} />
          <Route path="/mobiles/redmi" element={<Redmi />} />

          <Route path="/laptop/hp" element={<Hp />} />
          <Route path="/laptop/asus" element={<Asus />} />
          <Route path="/laptop/apple" element={<Apple />} />

          <Route path="/electronics/bluetooth" element={<Bluetooth />} />
          <Route path="/electronics/soundbars" element={<Soundbars />} />
          <Route path="/electronics/hometheatres" element={<Hometheatre />} />
          <Route path="/cart" element={<CartPage/>}/>
       
       
          <Route path="*" element={<Error />} />
          <Route  path='/success' element={<Success />}/>
      <Route  path='/cancel' element={<Cancel />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
