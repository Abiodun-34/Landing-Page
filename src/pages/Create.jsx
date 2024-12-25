import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Create = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Create Account Data:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-black shadow-md rounded-md w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">Create Account</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-3 bg-orange-500 text-white rounded-md"
        >
          Create Account
        </button>
        <Link to="/signin" className=" text-neutral-500 font-weight: 100 font-style: italic text-3-md mt-6 mb-4 flex justify-center items-center">Sign in?</Link>
        <Link to="/App" className="flex justify-center w-1/6 py-2 px-3 mt-4 bg-orange-500 text-white rounded-md">
        Back
        </Link>
      </form>
    </div>
  );
};

export default Create;
