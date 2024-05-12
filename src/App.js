import PersonTable from "./components/table/PersonTable";
import { personData } from "./api/mockData";
import TableContentHeader from "./components/TableContentHeader";
function App() {
  return (
    <div className="container mt-5">
      <TableContentHeader headingTitle="Person List" btnLabel="Add Person" />
      <PersonTable data={personData} />
    </div>
  );
}

export default App;
