import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", backgroundColor: "#1976d2", color: "white" }}>
        <div>
          <h2 style={{ margin: 0 }}>{user.role === "farmer" ? "Farmer" : "Master Station"} Dashboard</h2>
          <small>Welcome {user.username || "User"} | Device: {user.deviceId}</small>
        </div>
        <button onClick={handleLogout} style={{ padding: "8px 15px", backgroundColor: "#f44336", border: "none", borderRadius: 6, color: "white", cursor: "pointer", fontWeight: "bold", marginTop: 10 }}
          onMouseEnter={e => e.target.style.backgroundColor = "#d32f2f"}
          onMouseLeave={e => e.target.style.backgroundColor = "#f44336"}
        >
          Logout
        </button>
      </header>

      <iframe
        src={`http://YOUR_THINGSBOARD_URL/dashboards/${user.deviceId}?token=${user.token}`}
        width="100%"
        height="100%"
        style={{ border: "none", flexGrow: 1 }}
        title="Dashboard"
      />
    </div>
  );
};

export default Dashboard;
