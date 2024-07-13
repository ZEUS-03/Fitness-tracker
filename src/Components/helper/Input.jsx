import React, { useState } from "react";

const Input = ({
  label,
  value,
  onChange,
  type,
  className,
  required = false,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={className}
        required={required}
      />
    </div>
  );
};

export default Input;
