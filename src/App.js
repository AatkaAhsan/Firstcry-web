import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route,Routes, Navigate } from "react-router-dom";
import Products from "./routes/products";
import Boysclothes from "./Components/Product/Boysclothes";
import Girlsclothes from "./Components/Product/Girlsclothes"
import Productdetail from "./routes/productdetail";
import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Footer from "./Components/Footer/Footer"
import Extranavbar from "./Components/Navbar/Extranavbar";
import Footwear from "./Components/Product/Footwear";
import Cart from "./routes/Cart";
import Checkout from "./Components/checkout/Checkout"

import Login from "./Components/Login1/Login1/Login";
import SignUp from "./Components/Login1/SignUp/SignUp";
function App() {
  
  return (
    <div className="App">
    
      <Extranavbar/>
      <LowerNavbar/>
     
       <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path='/products' element={<Products/>}>
         <Route path='' element={<Navigate to="boys-clothes"/>}></Route>
         <Route path="boys-clothes" element={<Boysclothes/>}></Route>
         <Route path="girls-clothes" element={<Girlsclothes/>}></Route>
         <Route path="Footwear" element={<Footwear/>}></Route>
         
      </Route>
      <Route path="productdetails" element={<Productdetail/>}></Route>
      <Route path="cart" element={<Cart/>}></Route>
      <Route path="success" element={<Checkout/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signup" element={<SignUp/>}></Route>
       </Routes>
       <Footer/>
      
    </div>
  );
}

export default App;
