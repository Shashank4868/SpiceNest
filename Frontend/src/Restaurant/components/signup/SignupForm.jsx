// SignupForm.js
import React, { useState } from "react";
import Input from "../../../Shared/FormElements/Input";
import SubmitButton from "../../../Shared/FormElements/SubmitButton";
import MainNavigation from "../../../Shared/Navigation/MainNavigation";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Perform real-time validation on the specific field that was changed
    const validationErrors = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const validateField = (name, value) => {
    const errors = {};

    // Validate username
    if (name === "username") {
      if (value.trim() === "") {
        errors.username = "Username is required.";
      }
    }

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value.trim() === "") {
        errors.email = "Email is required.";
      } else if (!emailRegex.test(value)) {
        errors.email = "Invalid email address.";
      }
    }

    // Validate password
    if (name === "password") {
      if (value.trim() === "") {
        errors.password = "Password is required.";
      } else if (value.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
      }
    }

    // Validate confirmPassword
    if (name === "confirmPassword") {
      if (value.trim() === "") {
        errors.confirmPassword = "Confirm Password is required.";
      } else if (value !== formData.password) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    return errors;
  };

  return (
    <React.Fragment>
      <MainNavigation />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 shadow-md rounded-md w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <form>
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
          </form>
          <SubmitButton
            text="Sign Up"
            onClick={() => console.log("Form submitted:", formData)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupForm;
