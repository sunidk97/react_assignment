import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      navigate("/products");
    } else {
      alert("wrong Email or Password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
