import React, { useState } from "react";
import logo from "../../../shared/images/logo.png";
import { useLoginAdminMutation } from "../../../features/userApi";
import { useNavigate } from "react-router";
const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [loginAdmin] = useLoginAdminMutation();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await loginAdmin({ username, password }).unwrap();
      const token = response.data;
      if (!token) {
        console.error("Token not found in response:", response);
        return;
      }

      localStorage.setItem("token", token);
      console.log("Token saved:", token);
      console.log("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <div className="max-w-[1300px] mx-auto p-5 grid md:grid-cols-2 h-[100vh]">
      <aside className="bg-[#1C2536] text-white flex flex-col justify-center md:px-20 px-10">
        <h2 className="text-xl">Welcome to admin panel</h2>
        <img src={logo} className="w-[60%] " alt="logo" />
      </aside>
      <aside className="w-[80%] mx-auto flex flex-col justify-center">
        <h2 className="text-2xl font-bold">Log in</h2>
        <form className="flex flex-col gap-3 mt-5" onSubmit={handleLogin}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Name"
            className="placeholder:text-inherit p-4 border-1 border-gray-300 rounded hover:border-blue-500 transition-colors delay-75 outline-blue-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="placeholder:text-inherit p-4 border-1 border-gray-300 rounded hover:border-blue-500 transition-colors delay-75 outline-blue-500"
          />
          <button className="text-blue-500 font-bold mt-3">
            Forgot password?
          </button>
          <button className="bg-blue-600 rounded py-4 text-white font-semibold mt-3 hover:bg-blue-700 transition delay-75">
            Log in
          </button>
        </form>
      </aside>
    </div>
  );
};

export default Login;
