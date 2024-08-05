import { useState, useEffect } from "react";
import { useStore } from "../store/employees.store.tsx";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Employee } from "../types/employees.type.ts";
import { filterEmployees } from "../utils/utils.ts";

function HomeView() {
  const { employeesList } = useStore();
  const [filteredEmployeesList, setFilteredEmployeesList] = useState<
    Employee[]
  >([]);

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
      <h1 className="kalnia text-green pt-10 pb-20 text-2xl">
        Current employees
      </h1>
      <div
        id="current-employee"
        className="bg-white w-3/4 rounded-2xl mx-auto h-full p-20"
      >
        <div className="flex items-center justify-end mb-10">
          <p className="mr-5">Search</p>
          <input
            className="form-field__input w-1/3"
            type="text"
            id="search"
            onInput={handleSearchInput}
          />
        </div>

        <DataTable
          size={"small"}
          value={filteredEmployeesList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          emptyMessage="No employees found."
          stripedRows
        >
          <Column field="firstName" header="Firstname" sortable></Column>
          <Column field="lastName" header="Lastname" sortable></Column>
          <Column field="department" header="Department" sortable></Column>
          <Column
            field="birthDate"
            header="Birth date"
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
          <Column field="zipCode" header="Zipcode" sortable></Column>
        </DataTable>
      </div>
    </>
  );
}

export default HomeView;
