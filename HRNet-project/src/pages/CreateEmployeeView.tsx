import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useStore } from "../store/employee.store";

function CreateEmployeeView() {
  const [date, setDate] = useState(new Date());
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const departments = [
    { name: "Sales", id: 1 },
    { name: "Marketing", id: 2 },
    { name: "Engineering", id: 3 },
    { name: "Human Resources", id: 4 },
    { name: "Legal", id: 5 },
  ];

  const { bears, increase, decrease } = useStore();

  return (
    <>
      <div className="container">
        <button onClick={increase}>one up</button>
        <button onClick={decrease}>one down</button>
        <h1>{bears} around here...</h1>
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Calendar value={date} onChange={(e) => setDate(e.value as Date)} />

          <label htmlFor="start-date">Start Date</label>
          <Calendar value={date} onChange={(e) => setDate(e.value as Date)} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.value)}
            options={departments}
            optionLabel="name"
            placeholder="Select a Department"
            className="w-full md:w-14rem"
          />
        </form>

        <button>Save</button>
      </div>

      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
}

export default CreateEmployeeView;
