import { useState, useEffect } from "react";
import { useStore } from "../store/employees.store.tsx";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Employee } from "../types/employees.type.ts";
import { filterEmployees } from "../utils/utils.ts";

function HomeView() {
  const { employeesList } = useStore();
  const [filteredEmployeesList, setFilteredEmployeesList] = useState<Employee[]>(
    [],
  );

  useEffect(() => {
    setFilteredEmployeesList(employeesList);
  }, [employeesList]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredEmployeesList = filterEmployees(searchValue, employeesList);
    setFilteredEmployeesList(filteredEmployeesList);
  };

  return (
    <>
      <div id="employee-table" className="employee-table">
        <div className="employee-table__header">
          <h1>Current Employees</h1>
          <div>
            <p>Search: </p>
            <input type="text" id="search" onInput={handleSearchInput} />
          </div>
        </div>
        <DataTable
          value={filteredEmployeesList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          emptyMessage="No employees found."
        >
          <Column field="firstName" header="First name" sortable></Column>
          <Column field="lastName" header="Last name" sortable></Column>
          <Column field="department" header="Department" sortable></Column>
          <Column
            field="birthDate"
            header="Birth Date"
            dataType="date"
            sortable
          ></Column>
          <Column
            field="startDate"
            header="Start date"
            dataType="date"
            sortable
          ></Column>
          <Column field="street" header="Street" sortable></Column>
          <Column field="city" header="City" sortable></Column>
          <Column field="state" header="State" sortable></Column>
          <Column field="zipCode" header="Zip code" sortable></Column>
        </DataTable>
      </div>
    </>
  );
}

export default HomeView;
