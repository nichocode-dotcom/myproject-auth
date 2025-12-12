import React, { useState } from "react";
import "../App.css";

const Login = ({ setPage, setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append("email", form.email);
      formBody.append("password", form.password);

      const response = await fetch(
        "https://ush-frontend-challenge.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody.toString(),
        }
      );

      const data = await response.json();

      if (response.ok && data.status === "success") {
        console.log("Login Sukses:", data);
        const userData = data.data || {};
        setUser(userData);
        alert("Login Berhasil!");
      } else {
        console.warn("Login Gagal:", data);
        alert("Gagal Login: " + (data.message || "Email atau Password Salah"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan koneksi");
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
          <h2>Login Now</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Masukkan Email Anda"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan Password Anda"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="terms">
              <input type="checkbox" id="terms-login" required />
              <label htmlFor="terms-login">
                By logging in, I agree to{" "}
                <span>Rentverse Terms & Conditions and Privacy Policy</span>
              </label>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Processing..." : "Next"}
            </button>
          </form>

          <p className="switch-page">
            Don't have a Rentverse account yet?
            <span onClick={() => setPage("register")}> Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
