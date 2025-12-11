import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          <Route
            path="/farmer-dashboard"
            element={
              <PrivateRoute>
                <Dashboard type="farmer" />
              </PrivateRoute>
            }
          />

          <Route
            path="/master-dashboard"
            element={
              <PrivateRoute>
                <Dashboard type="master" />
              </PrivateRoute>
            }
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


