import React, { useState } from "react";
import Table from "./Table";
import SearchFilters from "../SearchFilters";

const tableMetaData = [
  {
    headerTitle: "ID",
    fieldName: "id",
    render: (rowData) => <>{rowData["id"]}</>,
    sortable: true,
  },
  {
    headerTitle: "Name",
    fieldName: "name",
    render: (rowData) => <>{rowData["name"]}</>,
    sortable: true,
  },
  // {
  //   headerTitle: "Age",
  //   fieldName: "age",
  //   render: (rowData) => <>{rowData["age"]}</>,
  //   sortable: true,
  // },
  {
    headerTitle: "Gender",
    fieldName: "gender",
    render: (rowData) => <>{rowData["gender"]}</>,
    sortable: true,
  },
  // {
  //   headerTitle: "Date of Birth",
  //   fieldName: "dateOfBirth",
  //   render: (rowData) => <>{rowData["dateOfBirth"]}</>,
  //   sortable: true,
  // },
  {
    headerTitle: "Area",
    fieldName: "area",
    render: (rowData) => <>{rowData["area"]}</>,
    sortable: true,
  },
  {
    headerTitle: "Email",
    fieldName: "email",
    render: (rowData) => <>{rowData["email"]}</>,
    sortable: true,
  },
  {
    headerTitle: "Phone Number",
    fieldName: "phonenumber",
    render: (rowData) => <>{rowData["phonenumber"]}</>,
    sortable: true,
  },
  {
    headerTitle: "Actions",
    render: (rowData) => (
      <>
        <div className="row">
          <div className="col-md-6">
            <a
              href={`/api/user/view?userId=${rowData["id"]}`}
              className="btn btn-primary"
            >
              Edit
            </a>
          </div>
          <div className="col-md-6">
            <a
              href={`/api/user/delete/${rowData["id"]}`}
              className="btn btn-danger"
            >
              Delete
            </a>
          </div>
        </div>
      </>
    ),
  },
];

const UserTable = ({ data }) => {
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phonenumber: "",
    gender: "",
    area: "",
    occupation: "",
  });

  const handleFilterSubmit = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <SearchFilters handleFilterSubmit={handleFilterSubmit} />
        <Table
          tableMetaData={tableMetaData}
          userData={data}
          filters={filters}
        />
      </div>
    </div>
  );
};

export default UserTable;
