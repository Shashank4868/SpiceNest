// InputField.js
import React from "react";

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border ${
          error ? "border-red-500" : "border-gray-300"
        } px-4 py-2 rounded-md`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
