import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

// Styles and/or assets
import "../../styles/login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const handleLogin = async () => {
    await actions.handle_Login_Click(email, password);
    if (store.accessToken) {
      navigate("/explore");
    }
  };

  return (
    <div className="login__container">
      <h1 className="text__heading">Login</h1>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="secret-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login__btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
