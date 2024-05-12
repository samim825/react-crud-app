import { userData } from "./api/mockData";
import TableContentHeader from "./components/TableContentHeader";
import UserTable from "./components/table/UserTable";
function App() {
  return (
    <div className="container mt-5">
      <TableContentHeader headingTitle="User List" btnLabel="Add User" />
      <UserTable data={userData} />
    </div>
  );
}

export default App;
