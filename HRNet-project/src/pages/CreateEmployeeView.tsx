import { useState } from "react";
import { useStore } from "../store/employees.store.tsx";
import type {
  DateEmployee,
  Department,
  Employee,
  State,
} from "../types/employees.type.ts";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import {
  departmentsForSelect,
  statesForSelect,
  formatEmployeeForm,
} from "../utils/utils.ts";
import { Modal } from "simple-modal-math";

function CreateEmployeeView() {
  const { addEmployee } = useStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState<Department>(null);
  const [street, setStreet] = useState("");
  const [state, setState] = useState<State>(null);
  const [birthDate, setBirthDate] = useState<DateEmployee>(null);
  const [startDate, setStartDate] = useState<DateEmployee>(null);
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sentenceForModal, setSentenceForModal] = useState("");

  const onSaveForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !department ||
      !street ||
      !state ||
      !birthDate ||
      !startDate ||
      !city ||
      !zipCode
    ) {
      setSentenceForModal(
        "❌ The employee has NOT been added. Please, fill in all fields before saving.",
      );
      setIsOpen(!isOpen);
    } else {
      const employeeToAdd: Employee = formatEmployeeForm({
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
      setSentenceForModal("✅ The employee has been added successfully.");
      setIsOpen(!isOpen);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h1 className="kalnia text-green pt-10 pb-20 text-2xl">
        Create a new employee
      </h1>
      <div
        id="new-employee"
        className="bg-white w-3/4 rounded-2xl mx-auto h-full p-20"
      >
        <form id="create-employee" className="flex flex-col">
          <div className="flex justify-between">
            <div className="form-field w-48">
              <label htmlFor="first-name" className="form-field__label">
                Firstname
              </label>
              <input
                placeholder="John"
                className="form-field__input"
                type="text"
                id="first-name"
                name="first-name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-field w-48">
              <label htmlFor="last-name" className="form-field__label">
                Lastname
              </label>
              <input
                placeholder="Doe"
                className="form-field__input"
                type="text"
                id="last-name"
                name="last-name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="form-field w-48">
              <label className="form-field__label" htmlFor="date-of-birth">
                Date of birth
              </label>
              <Calendar
                placeholder="Select a date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.value)}
                inputId="date-of-birth"
                showIcon
              />
            </div>
            <div className="form-field w-48">
              <label className="form-field__label" htmlFor="start-date">
                Start date
              </label>
              <Calendar
                placeholder="Select a date"
                value={startDate}
                onChange={(e) => setStartDate(e.value)}
                inputId="start-date"
                showIcon
              />
            </div>
          </div>
          <fieldset className="address">
            <legend className="text-xl py-5">Address</legend>
            <div className="flex justify-between">
              <div className="form-field w-full mr-10">
                <label className="form-field__label" htmlFor="street">
                  Street
                </label>
                <input
                  placeholder="1 Random Street"
                  className="form-field__input"
                  id="street"
                  name="street"
                  type="text"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>
              <div className="form-field w-1/4">
                <label className="form-field__label" htmlFor="city">
                  City
                </label>
                <input
                  placeholder="New York"
                  className="form-field__input"
                  id="city"
                  name="city"
                  type="text"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-field w-48">
                <label className="form-field__label" htmlFor="state">
                  State
                </label>
                <Dropdown
                  value={state}
                  onChange={(e) => setState(e.value)}
                  options={statesForSelect()}
                  optionLabel="name"
                  placeholder="Select a state"
                  aria-label="state"
                />
              </div>
              <div className="form-field w-48">
                <label className="form-field__label" htmlFor="zip-code">
                  Zip code
                </label>
                <input
                  placeholder="111"
                  className="form-field__input"
                  id="zip-code"
                  type="number"
                  name="zip-code"
                  onChange={(e) => {
                    setZipCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </fieldset>
          <div className="form-field w-48 pt-2">
            <label className="form-field__label" htmlFor="department">
              Department
            </label>
            <Dropdown
              value={department}
              onChange={(e) => setDepartment(e.value)}
              options={departmentsForSelect()}
              optionLabel="name"
              placeholder="Select a department"
              aria-label="department"
            />
          </div>
          <div className="flex justify-center">
            <button className="form-button" onClick={onSaveForm}>
              SAVE
            </button>
            <Modal
              isOpen={isOpen}
              closable={true}
              mainContent={sentenceForModal}
              hasFooter={true}
              buttonFooter="Close"
              modalSize="medium"
              onClose={handleClose}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateEmployeeView;
