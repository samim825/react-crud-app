import React from "react";

const Input = ({
  fieldName,
  type = "text",
  label,
  placeholder,
  min,
  max,
  value,
  handleFilterChange,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    handleFilterChange(fieldName, value); // Call the parent's onChange function
  };

  return (
    <div className="form-group">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
