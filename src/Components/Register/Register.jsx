import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>AJIO</h2>
        <div className="links">
          <Link to={"/"}>
            <h4>Register</h4>
          </Link>
          <div className="dash">|</div>
          <Link to={"/login"}>
            <h4>Login</h4>
          </Link>
        </div>
        <input
          type="text"
          name="username"
          value={input.username}
          placeholder="Username"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
