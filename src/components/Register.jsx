import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation after registration
import { toast } from 'react-hot-toast'; // Import react-hot-toast
const Register = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'Author', // Default role
  });

  const navigate = useNavigate();  // Navigation hook to redirect the user

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
    console.log('Register Data:', formData);

    // Save registered user in localStorage (Mock Database in real-world)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push(formData);  // Add the new user to the list
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    toast.success('You have successfully registered.');
    // Redirect to login page after successful registration
    navigate('/login');
    
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      role: 'Author', // Reset to default role
    });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-400">Register</h2>
      <div className="mt-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral p-6 rounded-lg shadow-lg text-neutral-content shadow-indigo-500/50"
        >
          <div className="mb-4">
            <label htmlFor="username" className="block text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
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
            <label htmlFor="password" className="block text-white">Password</label>
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
          <div className="mb-4">
            <label htmlFor="role" className="block text-white">Role</label>
            <select
              id="role"
              name="role"
              className="input input-bordered w-full bg-neutral-focus text-neutral-content"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Author">Author</option>
              <option value="Reviewer">Reviewer</option>
              <option value="ContentManager">Content Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-full">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Register;
