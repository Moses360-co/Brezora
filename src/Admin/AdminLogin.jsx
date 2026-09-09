import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.scss";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");

    const adminEmail = "admin@brezora.com";
    const adminPassword = "Brezora@123";

    if (
      email === adminEmail &&
      password === adminPassword
    ) {
      localStorage.setItem(
        "brezora_admin",
        "true"
      );

      navigate("/admin/dashboard");
    } else {
      setError(
        "Invalid email or password"
      );
    }
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">

          <h1>Brezora</h1>

          <p>Admin Panel</p>

        </div>

        <div className="admin-login-title">

          <h2>Admin Login</h2>

          <p>
            Login to manage room availability
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="admin-input">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

          </div>

          <div className="admin-input">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />

          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;