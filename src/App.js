import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      {/* ==============================
          NAVBAR
      ============================== */}

      <Navbar />

      {/* ==============================
          ROUTES
      ============================== */}

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* ADMIN LOGIN */}
        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* FALLBACK */}
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>

      {/* ==============================
          FOOTER
      ============================== */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;