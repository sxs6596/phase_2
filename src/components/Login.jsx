import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import react-hot-toast
const Login = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation after login

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Find user with matching email and password
    const user = registeredUsers.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (user) {
      // Save user info to localStorage (to mock logged-in state)
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to home or another protected route
      navigate("/");
      toast.success("You have successfully logged in.");
    } else {
      // Display error message
      setErrorMessage("Invalid email or password");
    }

    // Reset form
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Login</h2>
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
