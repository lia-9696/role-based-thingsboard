import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ role: "", username: "", password: "", deviceId: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = login(form.username, form.password, form.role, form.deviceId);

    if (res.success) {
      // Redirect to dashboard
      navigate("/dashboard");
    } else {
      setError(res.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4CAF50", // green background
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          width: 350,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Dashboard Login</h2>

        {/* Role Selection */}
        <label>Role:</label>
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          required
          style={{ width: "100%", padding: 8, marginBottom: 15 }}
        >
          <option value="">Select role</option>
          <option value="farmer">Farmer</option>
          <option value="master">Master Station</option>
        </select>

        {/* Username (optional) */}
        <label>Username (optional):</label>
        <input
          type="text"
          placeholder="Enter username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ width: "100%", padding: 8, marginBottom: 15 }}
        />

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{ width: "100%", padding: 8, marginBottom: 15 }}
        />

        {/* Device ID */}
        <label>Device ID:</label>
        <input
          type="text"
          placeholder="Enter Device ID"
          value={form.deviceId}
          onChange={(e) => setForm({ ...form, deviceId: e.target.value })}
          required
          style={{ width: "100%", padding: 8, marginBottom: 20 }}
        />

        {/* Login button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#2E7D32",
            color: "white",
            border: "none",
            borderRadius: 5,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {/* Error message */}
        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
