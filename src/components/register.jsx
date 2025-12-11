import React, { useState } from "react";
import "../App.css";

const Register = ({ setPage, setUser }) => {
  const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak sama!");
      return;
    }

    setLoading(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append("email", formData.email);
      formBody.append("password", formData.password);
      formBody.append("fullname", formData.fullName);
      formBody.append("role", formData.role);

      const response = await fetch(
        "https://ush-frontend-challenge.onrender.com/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registrasi Berhasil! Silakan Login.");
        setPage("login");
      } else {
        alert("Gagal Register: " + (data.message || JSON.stringify(data)));
      }
    } catch (error) {
      console.error(error);
      alert("Error koneksi: Pastikan internet lancar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay-text">
          <h1>Welcome to Rentverse</h1>
          <p>
            Realize your dream home. We craft spaces that are functional,
            inspiring joy, tranquility, and connection.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="form-box">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Masukan nama lengkap"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan email anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="role-group">
              <input
                type="radio"
                id="role-tenant"
                name="role"
                value="tenant"
                checked={formData.role === "tenant"}
                onChange={handleChange}
              />
              <label
                htmlFor="role-tenant"
                className={`role-option ${
                  formData.role === "tenant" ? "selected" : ""
                }`}
              >
                <div className="role-title">Tenant</div>
                <div className="role-dot" aria-hidden />
              </label>

              <input
                type="radio"
                id="role-owner"
                name="role"
                value="owner"
                checked={formData.role === "owner"}
                onChange={handleChange}
              />
              <label
                htmlFor="role-owner"
                className={`role-option ${
                  formData.role === "owner" ? "selected" : ""
                }`}
              >
                <div className="role-title">Property Owner</div>
                <div className="role-dot" aria-hidden />
              </label>

              <div className="role-help">
                *Choose this if you are looking to search for and book an
                apartment
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Buat password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Ulangi password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="terms">
              <input type="checkbox" id="terms-register" required />
              <label htmlFor="terms-register">
                By registering, I agree to{" "}
                <span>Rentverse Terms & Conditions and Privacy Policy</span>
              </label>
            </div>
            
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Processing..." : "Register"}
            </button>
          </form>

          <p className="switch-page">
            Already have a Rentverse account?
            <span onClick={() => setPage("login")}> Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;