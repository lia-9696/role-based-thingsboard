import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute"; // Correct import path

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<Login />} />

          {/* Dashboard page - protected route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

