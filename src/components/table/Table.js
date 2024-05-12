// import React, { useState } from "react";

// const Table = ({ tableMetaData, personData }) => {
//   const [sortColumn, setSortColumn] = useState(null);
//   const [sortDirection, setSortDirection] = useState("asc");
//   const [filters, setFilters] = useState({
//     name: "",
//     age: "",
//     occupation: "",
//     gender: "",
//     area: "",
//   });

//   const applyFilter = (data, filters) => {
//     return data.filter((item) => {
//       const nameMatch =
//         !filters.name ||
//         item.name.toLowerCase().includes(filters.name.toLowerCase());
//       const ageMatch = !filters.age || item.age === parseInt(filters.age);
//       const occupationMatch =
//         !filters.occupation ||
//         item.occupation
//           .toLowerCase()
//           .includes(filters.occupation.toLowerCase());
//       const genderMatch =
//         !filters.gender ||
//         item.gender.toLowerCase() === filters.gender.toLowerCase();
//       const areaMatch =
//         !filters.area ||
//         item.area.toLowerCase().includes(filters.area.toLowerCase());
//       return (
//         nameMatch && ageMatch && occupationMatch && genderMatch && areaMatch
//       );
//     });
//   };

//   //   const handleSort = (column) => {
//   //     if (column === sortColumn) {
//   //       setSortDirection(sortDirection === "asc" ? "desc" : "asc");
//   //     } else {
//   //       setSortColumn(column);
//   //       setSortDirection("asc");
//   //     }
//   //   };

//   const renderSortingIcon = (fieldName) => {
//     if (fieldName === sortColumn) {
//       return sortDirection === "asc" ? <>&#8648;</> : <>&#8650;</>;
//     }
//     return <>&#8648;</>;
//   };

//   const sortedPersonData = [...personData].sort((a, b) => {
//     if (sortColumn === null) return 0; // No sorting
//     const aValue = a[sortColumn];
//     const bValue = b[sortColumn];
//     if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
//     if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
//     return 0;
//   });

//   const handleSort = (column) => {
//     const filteredData = applyFilter(personData, filters);
//     const sortedData = [...filteredData].sort((a, b) => {
//       if (column === null) return 0; // No sorting
//       const aValue = a[column];
//       const bValue = b[column];
//       if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
//       return 0;
//     });
//     setSortedPersonData(sortedData);
//   };
//   const handleFilterChange = (event) => {
//     console.log(event.target);
//     const { name, value } = event.target;
//     setFilters({ ...filters, [name]: value });
//     applyFilter(setFilters);
//   };

//   return (
//     <div className="mt-2">
//       <input
//         type="text"
//         name="name"
//         value={filters.name}
//         onChange={handleFilterChange}
//         placeholder="Filter by name"
//       />
//       <input
//         type="number"
//         name="age"
//         value={filters.age}
//         onChange={handleFilterChange}
//         placeholder="Filter by age"
//       />
//       <table className="table table-bordered">
//         <thead className="table-secondary">
//           <tr>
//             {tableMetaData.map((meta, i) => (
//               <th
//                 className="cursor-pointer"
//                 key={i}
//                 onClick={() => meta.sortable && handleSort(meta.fieldName)}
//               >
//                 {meta.headerTitle}
//                 {meta.sortable && (
//                   <span className="sorting-icon">
//                     {renderSortingIcon(meta.fieldName)}
//                   </span>
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {sortedPersonData.map((rowData, index) => (
//             <tr key={index}>
//               {tableMetaData.map((meta, j) => (
//                 <td key={j}>{meta.render(rowData)}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import React, { useState } from "react";

const Table = ({ tableMetaData, personData, filters }) => {
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
    return data.filter((person) => {
      for (const key in filters) {
        console.log(filters[key]);
        console.log(person[key].toLowerCase());
        if (filters[key] !== "" && person[key].toLowerCase() !== filters[key]) {
          return false;
        }
      }
      return true;
    });
  };

  const sortedAndFilteredData = applyFilters(personData).sort((a, b) => {
    if (sortColumn === null) return 0; // No sorting
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="mt-2">
      {/* Filter input elements */}
      {/* <input
        type="text"
        name="name"
        value={filters.name}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
      <input
        type="number"
        name="age"
        value={filters.age}
        onChange={handleFilterChange}
        placeholder="Filter by age"
      /> */}

      {/* Add similar input elements for other optional fields */}

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
