import { AuthProvider } from "./pages/common/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/common/Home";
import Dashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        {/* Common routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      {/* Admin routes */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}
