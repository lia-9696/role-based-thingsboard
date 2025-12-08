import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function generateToken(username, deviceId) {
  return btoa(`${username}:${deviceId}:${Date.now()}`);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recentDevices, setRecentDevices] = useState([]);

  const login = ({ role, deviceId, username }) => {
    if (!role || !deviceId) return { success: false, message: "Role and Device ID required" };

    const token = generateToken(username || "user", deviceId);

    setUser({ role, deviceId, username, token });

    // Add device to recent devices (max 5)
    setRecentDevices(prev => {
      const filtered = prev.filter(d => d.deviceId !== deviceId);
      return [{ deviceId, role, username }, ...filtered].slice(0, 5);
    });

    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, recentDevices }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
