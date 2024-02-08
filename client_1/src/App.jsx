import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  { ShohojogProvider } from "./context/ShohojogContext";
import Login from "./components/Login";
import Register from "./components/Register";

/* function App() {
  return (
    <Fragment>
      
      <div className="container">
      <Router>
        
          <Routes>
          <Route
              exact
              path="/login"
              element = {<Login/>}
            />
            <Route
              exact
              path="/register"
              element = {<Register/>} />
          </Routes>
        
      </Router>
      </div>
    </Fragment>
  );
} */


const App = () => {
  return (
    <ShohojogProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route
              exact
              path="/login"
              element = {<Login/>}
            />
            <Route
              exact
              path="/register"
              element = {<Register/>} />
          </Routes>
        </Router>
      </div>
      </ShohojogProvider>
  );
  };
export default App;

