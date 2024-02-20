import React, { Fragment } from 'react';
import All_products_Customer from './All_products_Customer'; // Import the All_Products_Customer component

const Home_Customer = ({ setAuth }) => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  return (
    <Fragment>
      {/* Title Bar */}
      <div className="title-bar">
        <h1>Shohojog</h1>
        <div className="logout-option">
          <button onClick={(e) => logout(e)}>Log out</button>
        </div>
      </div>
      
      {/* All Products for Customer */}
      <All_products_Customer />
    </Fragment>
  );
};

export default Home_Customer;
