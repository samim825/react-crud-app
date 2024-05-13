import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";

export const Form = ({ formData, setFormData, handleCreateUserSubmit }) => {
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="">
      <form className="" onSubmit={handleCreateUserSubmit}>
        <div className="row">
          <div className="col-sm-3">
            <Input
              fieldName="name"
              label="Name"
              placeholder="Enter name"
              handleChange={handleChange}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="age"
              label="Age"
              type="number"
              placeholder="Enter age"
              min="0"
              max="100"
              handleChange={handleChange}
            />
          </div>
          <div className="col-sm-3">
            <Radio
              fieldName="gender"
              label="Gender"
              handleChange={handleChange}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="dateOfBirth"
              label="Date of Birth"
              type="date"
              placeholder="Enter date of birth"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-3">
            <Select
              fieldName="area"
              label="Area"
              handleChange={handleChange}
              options={[
                { value: "Mirpur", label: "Mirpur" },
                { value: "Savar", label: "Savar" },
                { value: "Banani", label: "Banani" },
                { value: "Gulshan", label: "Gulshan" },
                { value: "Dhanmondi", label: "Dhanmondi" },
                { value: "MohakhaliDohs", label: "Mohakhali DOHS" },
              ]}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="email"
              label="E-mail address"
              type="email"
              placeholder="Enter email"
              handleChange={handleChange}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="phonenumber"
              label="Phone Number"
              type="tel"
              placeholder="Enter Phone Number"
              handleChange={handleChange}
            />
          </div>
          <div className="col-sm-3">
            <Select
              fieldName="occupation"
              label="Occupation"
              handleChange={handleChange}
              options={[
                { value: "SoftwareEngineer", label: "Software Enginner" },
                { value: "Banker", label: "Banker" },
                { value: "Accountant", label: "Accountant" },
                { value: "Architect", label: "Architect" },
              ]}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="d-flex justify-content-end">
            <div className="col-sm-3 padding-left-12">
              <button type="reset" className="btn btn-block btn-warning w-100">
                Reset
              </button>
            </div>
            <div className="col-sm-3 padding-left-12">
              <button type="submit" className="btn btn-block btn-success w-100">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
