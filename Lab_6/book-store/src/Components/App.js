import "../ComponentsStyle/App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="*" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/cart" element={<div>Its Cart</div>} />
              </Routes>
          </BrowserRouter>
          <Footer />
      </div>
  );
}

export default App;
