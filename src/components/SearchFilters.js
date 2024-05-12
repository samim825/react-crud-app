import React, { useState } from "react";
import Input from "./form/Input";
import Select from "./form/Select";

const SearchFilters = ({ handleFilterSubmit }) => {
  const [formFilters, setFormFilters] = useState({
    name: "",
    email: "",
    phonenumber: "",
    gender: "",
    area: "",
    occupation: "",
  });

  const handleFilterChange = (name, value) => {
    setFormFilters({ ...formFilters, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFilterSubmit(formFilters);
  };

  return (
    <div className="mt-5">
      <form
        className="bg-secondary p-3 text-white rounded"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-sm-3">
            <Input
              fieldName="name"
              type="text"
              placeholder="Search by Name"
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="email"
              type="text"
              placeholder="Search by Email"
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-sm-3">
            <Input
              fieldName="phonenumber"
              type="tel"
              placeholder="Search by Phone Number"
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-sm-3">
            <Select
              fieldName="gender"
              options={[
                { value: "", label: "---  Select Gender  ---" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-3">
            <Select
              fieldName="area"
              options={[
                { value: "", label: "---  Select area  ---" },
                { value: "Mirpur", label: "Mirpur" },
                { value: "Savar", label: "Savar" },
                { value: "Banani", label: "Banani" },
                { value: "Gulshan", label: "Gulshan" },
                { value: "Dhanmondi", label: "Dhanmondi" },
                { value: "MohakhaliDohs", label: "Mohakhali DOHS" },
              ]}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-sm-3">
            <Select
              fieldName="occupation"
              options={[
                { value: "", label: "---  Select Occupation  ---" },
                { value: "SoftwareEngineer", label: "Software Enginner" },
                { value: "Banker", label: "Banker" },
                { value: "Accountant", label: "Accountant" },
                { value: "Architect", label: "Architect" },
              ]}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <div className="col-sm-3 padding-left-12 mt-4">
            <button type="reset" className="btn btn-block btn-warning w-100">
              Cancel Filter
            </button>
          </div>
          <div className="col-sm-3 padding-left-12 mt-4">
            <button type="submit" className="btn btn-block btn-success w-100">
              <i className="bi bi-calender-2"></i>Apply Filter
            </button>
          </div>
        </div>
        {/* <div className="row ">
          <div className="d-flex justify-content-end">
            <div className="col-sm-3 padding-left-12">
              <button type="submit" className="btn btn-block btn-success w-100">
                Apply Filter
              </button>
            </div>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default SearchFilters;
