import React, { Fragment } from 'react';

const Home = ({ setAuth }) => {
  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={handleLogout}>Log out</button>
    </Fragment>
  );
};

export default Home;
