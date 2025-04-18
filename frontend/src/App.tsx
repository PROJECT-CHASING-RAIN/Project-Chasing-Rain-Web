import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail'; 
import Payment from './Payment/Payment';
import Fulfillment from './Fulfillment/Fulfillment';

export default function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  } 
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router> 
        <div className="grid-container">
          <link rel = "stylesheet" href = "style.css"/>
          <title>Chasing Rain</title>

      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Chasing Rain</a>
        </div>
        <div className="header-links">
          <Link to = "/">Home</Link>
          <Link to = "/catalog">Catalog</Link>
          <Link to = "/orders">Orders</Link>
          <Link to = "Payment">Payment</Link>
          <Link to = "/fulfillment">Fulfillment</Link>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Products />} />
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/orders" element={<OrderDetail/>} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/fulfillment" element={<Fulfillment />} />
        
      </Routes>
      </main>
    
    <footer className="footer">
      &copy; 2025 Chasing Rain
    </footer>
    </div>
    </Router>
  );
}