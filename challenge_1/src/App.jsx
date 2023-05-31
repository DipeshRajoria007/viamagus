import React, { useState } from "react";
import amazon from "./assets/amazon.png";
import tree from "./assets/tree.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(email);

    if (!isValidEmail) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear form fields
    setEmail("");
    setPassword("");
    setEmailError("");
  };

  return (
    <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white md:w-[40%] rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <header className="bg-white shadow-md w-full p-4 mb-8">
          <img src={amazon} alt="Logo" className="mx-auto h-10" />
        </header>
        <div className="px-6 text-sm">
          <h2 className="text-2xl font-semibold text-center  text-green-500 ">
            Login
          </h2>
          <img src={tree} alt="Logo" className="mx-auto h-40" />
          <div className="mb-6">
            <label className="block mb-1">Email:</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            {emailError && (
              <span className="text-red-500 text-sm mt-1">{emailError}</span>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              New user? Sign up
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 mb-4"
          >
            Submit
          </button>
          <p className="my-2 text-center">or</p>
          <div className="flex flex-col gap-4 items-center justify-center">
            <button className="bg-blue-500 w-full text-white font-bold py-2 px-4 rounded ">
              Continue with Google
            </button>
            <button className="bg-blue-800 w-full text-white font-bold py-2 px-4 mb-4 rounded">
              Continue with Facebook
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
