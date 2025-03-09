import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };


  return (
    <div className="flex h-screen w-full justify-center items-center px-4">
      <div className="border-2 border-emerald-400 px-6 py-8 rounded-3xl max-w-md w-full">
        <form className="flex flex-col items-center justify-center" onSubmit={formHandler}>
          <input
            className="px-4 py-3 rounded-3xl bg-transparent border-2 border-emerald-400 my-4 w-full md:w-3/4 placeholder:text-gray-400"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Enter Your Email"
          />
          <input
            className="px-4 py-3 rounded-3xl bg-transparent border-2 border-emerald-400 my-4 w-full md:w-3/4 placeholder:text-gray-400"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Enter Your Password"
          />
          <button
            className="px-7 py-3 rounded-2xl bg-emerald-600 text-white font-bold mt-4 w-full md:w-3/4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
