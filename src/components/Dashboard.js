import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = ({ type }) => {
  const { logout } = useAuth();

  const deviceId = localStorage.getItem("deviceId");
  const role = localStorage.getItem("role");

  const dashboardURL = `http://YOUR_THINGSBOARD_URL/dashboard/${deviceId}`;

  return (
    <div style={{ padding: 20 }}>
      <h2>{role === "farmer" ? "Farmer Dashboard" : "Master Dashboard"}</h2>

      <button onClick={logout}>Logout</button>

      <iframe
        src={dashboardURL}
        width="100%"
        height="600px"
        style={{ border: "none", marginTop: "20px" }}
        title="ThingsBoard Dashboard"
      ></iframe>
    </div>
  );
};

export default Dashboard;
