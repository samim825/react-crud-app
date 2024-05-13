import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

const ModalForm = ({ formData, onChange, onSubmit }) => {
  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div>
          <Input
            fieldName="name"
            label="Name"
            placeholder="Enter name"
            value={formData.name}
            handleChange={onChange}
          />
        </div>
        <div>
          <Radio
            fieldName="gender"
            label="Gender"
            value={formData.gender}
            handleChange={onChange}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>
        <div>
          <Select
            fieldName="area"
            label="Area"
            value={formData.area}
            handleChange={onChange}
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
        <div>
          <Input
            fieldName="email"
            label="E-mail address"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            handleChange={onChange}
          />
        </div>
        <div>
          <Input
            fieldName="phonenumber"
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
            value={formData.phonenumber}
            handleChange={onChange}
          />
        </div>

        <div className="row mt-4">
          <div className="d-flex justify-content-between">
            <div className="col-sm-6 p-1">
              <button type="reset" className="btn btn-block btn-warning w-100">
                Reset
              </button>
            </div>
            <div className="col-sm-6 p-1">
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

export default ModalForm;
