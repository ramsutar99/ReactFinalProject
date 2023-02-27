import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (username === password && username.length > 0) {
      navigate("/orders");
      alert("Login Successful!");
      props.login()
    } else {
      alert("wrong");
    }
  }

  return (
    <section id="login">
      <div className="login-form">
        <h1>Sign In</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <br />
        <button id="login-form" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </section>
  );
}

export default LoginPage;

// class======================================================================
