import "../ComponentsStyle/App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import Item from "../Pages/Item";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/item/:id" element={<Item />} />
                  <Route path="/cart" element={<div>Its Cart</div>} />
              </Routes>
          </BrowserRouter>
          <Footer />
      </div>
  );
}

export default App;
