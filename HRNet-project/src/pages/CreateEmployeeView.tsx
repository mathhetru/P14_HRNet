import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/employees.store.tsx";
import type {
  DateEmployee,
  Department,
  State,
} from "../types/employees.type.ts";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import {
  departmentsForSelect,
  statesForSelect,
  formatEmployeeForm,
} from "../utils/utils.ts";

function CreateEmployeeView() {
  const { addEmployee } = useStore();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState<Department>(null);
  const [street, setStreet] = useState("");
  const [state, setState] = useState<State>(null);
  const [birthDate, setBirthDate] = useState<DateEmployee>(new Date());
  const [startDate, setStartDate] = useState<DateEmployee>(new Date());
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const onSaveForm = () => {
    const employeeToAdd = formatEmployeeForm({
      firstName,
      lastName,
      startDate,
      department,
      birthDate,
      street,
      city,
      state,
      zipCode,
    });
    addEmployee(employeeToAdd);
  };

  return (
    <>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <Calendar value={birthDate} onChange={(e) => setBirthDate(e.value)} />
          <label htmlFor="start-date">Start Date</label>
          <Calendar value={startDate} onChange={(e) => setStartDate(e.value)} />
          <fieldset className="address">
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <label htmlFor="state">State</label>
            <Dropdown
              value={state}
              onChange={(e) => setState(e.value)}
              options={statesForSelect()}
              optionLabel="name"
              placeholder="Select a state"
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Dropdown
            value={department}
            onChange={(e) => setDepartment(e.value)}
            options={departmentsForSelect()}
            optionLabel="name"
            placeholder="Select a department"
          />
        </form>
        <button onClick={onSaveForm}>Save</button>
      </div>
      {/* <div id="confirmation" className="modal">
        Employee Created!
      </div> */}
    </>
  );
}

export default CreateEmployeeView;
