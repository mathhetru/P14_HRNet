import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { departmentsData } from "../data/departments";
import { statesData } from "../data/states";

function CreateEmployeeView() {
  const [date, setDate] = useState<Date | undefined | null>(new Date());
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departments = () => {
    return departmentsData.map(
      (department: { name: string }, index: number) => ({
        name: department.name,
        id: index,
      }),
    );
  };

  const states = () => {
    return statesData.map(
      (state: { name: string; abbreviation: string }, index: number) => ({
        name: state.name,
        abbreviation: state.abbreviation,
        id: index,
      }),
    );
  };

  return (
    <>
      <div className="container">
        <a href="employee-list.html">View Current Employees</a>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Calendar value={date} onChange={(e) => setDate(e.value)} />

          <label htmlFor="start-date">Start Date</label>
          <Calendar value={date} onChange={(e) => setDate(e.value)} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <Dropdown
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.value)}
              options={states()}
              optionLabel="name"
              placeholder="Select a Department"
              className="w-full md:w-14rem"
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.value)}
            options={departments()}
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
