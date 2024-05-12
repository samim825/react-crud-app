import React, { useState } from "react";

const Table = ({ tableMetaData, userData, filters }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const renderSortingIcon = (fieldName) => {
    if (fieldName === sortColumn) {
      return sortDirection === "asc" ? <>&#8648;</> : <>&#8650;</>;
    }
    return <>&#8648;</>;
  };

  const applyFilters = (data) => {
    return data.filter((user) => {
      for (const key in filters) {
        if (key === "gender") {
          if (
            filters[key].trim() !== "" &&
            user[key].toLowerCase() !== filters[key].toLowerCase()
          ) {
            return false;
          }
        } else {
          if (
            filters[key].trim() !== "" &&
            !user[key].toLowerCase().includes(filters[key].toLowerCase())
          ) {
            return false;
          }
        }
      }
      return true;
    });
  };

  const sortedAndFilteredData = applyFilters(userData).sort((a, b) => {
    if (sortColumn === null) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="mt-2">
      <table className="table">
        <thead className="table-secondary">
          <tr>
            {tableMetaData.map((meta, i) => (
              <th
                className="cursor-pointer"
                key={i}
                onClick={() => handleSort(meta.fieldName)}
              >
                {meta.headerTitle}
                {meta.sortable && (
                  <span className="sorting-icon">
                    {renderSortingIcon(meta.fieldName)}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((rowData, index) => (
            <tr key={index}>
              {tableMetaData.map((meta, j) => (
                <td key={j}>{meta.render(rowData)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
