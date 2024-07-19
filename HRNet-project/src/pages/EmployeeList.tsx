import { useStore } from "../store/employees.store.tsx";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function HomeView() {
  const { employeesList } = useStore();

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable value={employeesList}>
          <Column field="firstName" header="First name"></Column>
          <Column field="lastName" header="Last name"></Column>
          <Column field="department" header="Department"></Column>
          <Column
            field="birthDate"
            header="Birth Date"
            dataType="date"
          ></Column>
          <Column
            field="startDate"
            header="Start date"
            dataType="date"
          ></Column>
          <Column field="street" header="Street"></Column>
          <Column field="city" header="City"></Column>
          <Column field="state" header="State"></Column>
          <Column field="zipCode" header="Zip code"></Column>
        </DataTable>
      </div>
    </>
  );
}

export default HomeView;
