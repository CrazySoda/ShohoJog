/* Version 1.00
import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [navigateTo, setNavigateTo] = useState(null);
  const [formData, setFormData] = useState({
    e_mail: "",
    user_password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...formData };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Login Successful");
        // Determine where to navigate based on user type
        if (parseRes.userType === "customer") {
          setNavigateTo("/Home_Customer");
        } else if (parseRes.userType === "seller") {
          setNavigateTo("/Home_Seller");
        } else if (parseRes.userType === "employee") {
          setNavigateTo("/Home_Employee");
        }
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // If navigateTo is set, navigate to the specified route
  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  return (
    <Fragment>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            name="e_mail"
            placeholder="Email"
            onChange={handleChange}
            value={formData.e_mail}
            required
          />
          <input
            className="login-input"
            type="password"
            name="user_password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.user_password}
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
 */
//Version 1.01
//Supports many logIns at a time
import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [navigateTo, setNavigateTo] = useState(null);
  const [formData, setFormData] = useState({
    e_mail: "",
    user_password: "",
  });
  const [userType, setUserType] = useState(null); // Add userType state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...formData };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const parseRes = await response.json();
      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Login Successful");
        setUserType(parseRes.userType); // Set userType state
        localStorage.setItem("userType", parseRes.userType); // Store userType in localStorage
        localStorage.setItem("userId", parseRes.userId); // Store userId in localStorage
        // Determine where to navigate based on user type
        if (parseRes.userType === "customer") {
          setNavigateTo("/Home_Customer");
        } else if (parseRes.userType === "seller") {
          setNavigateTo("/Home_Seller");
        } else if (parseRes.userType === "employee") {
          setNavigateTo("/Home_Employee");
        }
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // If navigateTo is set, navigate to the specified route
  if (navigateTo) {
    return <Navigate to={navigateTo} />;
  }

  return (
    <Fragment>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            name="e_mail"
            placeholder="Email"
            onChange={handleChange}
            value={formData.e_mail}
            required
          />
          <input
            className="login-input"
            type="password"
            name="user_password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.user_password}
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
