// import React, { Fragment } from 'react';

// const Home = ({ setAuth }) => {
//   const handleLogout = () => {
//     setAuth(false);
//   };

//   return (
//     <Fragment>
//       <h1>Home</h1>
//       <button onClick={handleLogout}>Log out</button>
//     </Fragment>
//   );
// };

// export default Home;
// Home.jsx
import React, { Fragment } from 'react';
import AllProducts from './all_products'; // Import the AllProducts component

const Home = ({ setAuth }) => {
  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={handleLogout}>Log out</button>
      <AllProducts /> {/* Render the AllProducts component */}
    </Fragment>
  );
};

export default Home;
