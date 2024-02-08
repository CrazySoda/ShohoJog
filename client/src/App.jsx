import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//routes/components
import Home from "./routes/Home";
import Login from "./routes/Login";
import Registration from "./routes/Registration";

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
            path="/login"
            element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/" />}
          />
          <Route
            path="/registration"
            element={!isAuthenticated ? <Registration setAuth={setAuth} /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
      {/* Hello  */}
    </Fragment>
  );
};

export default App;
