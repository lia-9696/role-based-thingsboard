import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

import "./Auth.css"; // Styling file

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // Store role + device locally
      localStorage.setItem("role", role);
      localStorage.setItem("deviceId", deviceId);

      alert("Signup successful!");

      navigate("/"); // Redirect to login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          
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

          <select onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="farmer">Farmer</option>
            <option value="master">Master Station</option>
          </select>

          <input
            type="text"
            placeholder="Device ID"
            onChange={(e) => setDeviceId(e.target.value)}
            required
          />

          <button type="submit">Register</button>

        </form>

        {error && <p className="error-text">{error}</p>}

        <p className="switch-text">
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;


