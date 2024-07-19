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
          <Column field="firstName" header="firstName"></Column>
          <Column field="lastName" header="lastName"></Column>
          <Column field="department" header="department"></Column>
          <Column
            field="dateOfBirth"
            header="dateOfBirth"
            dataType="date"
          ></Column>
          <Column field="startDate" header="startDate" dataType="date"></Column>
          <Column field="street" header="street"></Column>
          <Column field="city" header="city"></Column>
          <Column field="state" header="state"></Column>
          <Column field="zipCode" header="zipCode"></Column>
        </DataTable>
      </div>
    </>
  );
}

export default HomeView;
