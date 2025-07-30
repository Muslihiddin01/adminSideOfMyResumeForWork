import React, { useState } from "react";
import logo from "../../../shared/images/logo.png";
import { useLoginAdminMutation } from "../../../features/userApi";
import { useNavigate } from "react-router";
const Login = () => {
  let navigate = useNavigate();
  const [loginAdmin] = useLoginAdminMutation();
  let [inpAddName, setInpAddName] = useState("");
  let [inpAddPassword, setInpAddPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await loginAdmin({ userName: inpAddName, password: inpAddPassword });
      localStorage.setItem("access_token", inpAddName);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="max-w-[1300px] mx-auto p-5 grid md:grid-cols-2 h-[100vh]">
      <aside className="bg-[#1C2536] text-white flex flex-col justify-center md:px-20">
        <h2 className="text-xl">Welcome to admin panel</h2>
        <img src={logo} className="w-[60%] " alt="logo" />
      </aside>
      <aside className="w-[80%] mx-auto flex flex-col justify-center">
        <h2 className="text-2xl font-bold">Log in</h2>
        <form className="flex flex-col gap-3 mt-5" onSubmit={handleLogin}>
          <input
            value={inpAddName}
            onChange={(e) => setInpAddName(e.target.value)}
            type="text"
            placeholder="Name"
            className="placeholder:text-inherit p-4 border-1 border-gray-300 rounded hover:border-blue-500 transition-colors delay-75 outline-blue-500"
          />
          <input
            value={inpAddPassword}
            onChange={(e) => setInpAddPassword(e.target.value)}
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
