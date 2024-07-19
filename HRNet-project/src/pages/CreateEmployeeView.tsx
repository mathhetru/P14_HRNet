import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { departments } from "../data/departments";
import { states } from "../data/states";

function CreateEmployeeView() {
  const [birthDate, setBirthDate] = useState<Date | undefined | null>(
    new Date(),
  );
  const [startDate, setStartDate] = useState<Date | undefined | null>(
    new Date(),
  );
  const [selectedDepartment, setSelectedDepartment] = useState(null);

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
          <Calendar value={birthDate} onChange={(e) => setBirthDate(e.value)} />

          <label htmlFor="start-date">Start Date</label>
          <Calendar value={startDate} onChange={(e) => setStartDate(e.value)} />

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
              placeholder="Select a department"
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
