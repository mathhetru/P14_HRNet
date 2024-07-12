import { useStore } from "../store/employees.store.tsx";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function HomeView() {
  const { employeesList } = useStore();

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable value={employeesList} tableStyle={{ minWidth: "50rem" }}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="category" header="Category"></Column>
          <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </>
  );
}

export default HomeView;
