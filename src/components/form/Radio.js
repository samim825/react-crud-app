import React from "react";

const Radio = ({ fieldName, label, options }) => {
  return (
    <div className="row">
      <label htmlFor={fieldName} className="form-label">
        {label}
      </label>
      <div className="">
        {options.map((item, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name={fieldName}
              id={item.value}
              value={item.value}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
