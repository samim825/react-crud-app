import React from "react";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

const ModalForm = () => {
  return (
    <div className="">
      <form className="">
        <div>
          <Input fieldName="name" label="Name" placeholder="Enter name" />
        </div>
        {/* <div>
          <Input
            fieldName="age"
            label="Age"
            type="number"
            placeholder="Enter age"
            min="0"
            max="100"
          />
        </div> */}
        <div>
          <Radio
            fieldName="gender"
            label="Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        </div>
        {/* <div>
          <Input
            fieldName="dateOfBirth"
            label="Date of Birth"
            type="date"
            placeholder="Enter date of birth"
          />
        </div> */}
        <div>
          <Select
            fieldName="area"
            label="Area"
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
          />
        </div>
        <div>
          <Input
            fieldName="phonenumber"
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
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
