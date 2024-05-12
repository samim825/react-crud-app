import React from "react";

const Select = ({ fieldName, label, options, handleFilterChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    if (handleFilterChange !== undefined) {
      handleFilterChange(fieldName, value); // Call the parent's onChange function
    }
  };

  return (
    <div>
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id={fieldName}
        name={fieldName}
        onChange={handleChange}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
