import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//routes/components
//import all_products from "./routes/all_products";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import Home_seller from "./routes/Home_seller";
import SellerDetails from "./routes/SellerDetails";
import SellerProducts from  "./routes/seller_products";
const App = () => {
  //functions
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  
  //showing the routes
  return (
    <Fragment>

      <Router>
        <Routes>

        <Route
            path="/"
            element={isAuthenticated ? <Home setAuth={setAuth} /> : <Navigate to="/login" />}
          />
           <Route
            path="/Home_seller"
            element={
              !isAuthenticated ? (
                <Home_seller setAuth={setAuth} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/" />}
          />
          <Route
            path="/registration"
            element={!isAuthenticated ? <Registration setAuth={setAuth} /> : <Navigate to="/" />}
          />
          <Route path="/seller/getSeller" element={< SellerDetails />} />
            // TO GET SELLER PRODUCTS
            <Route path="/seller-products" element={<  SellerProducts/>} />
        </Routes>
      </Router>
      {/* Hello  */}
    </Fragment>
  );
};

export default App;
