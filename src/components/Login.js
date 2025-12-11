import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import "./Auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      const role = localStorage.getItem("role");

      if (role === "farmer") navigate("/farmer-dashboard");
      else navigate("/master-dashboard");
      
    } catch (err) {
      setError("Invalid Login Credentials");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Dashboard Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="switch-text">
          New user? <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
