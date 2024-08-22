import { describe, it, expect } from "vitest";
import type {
  State,
  Department,
  EmployeeForm,
} from "../types/employees.type.ts";
import {
  departmentsForSelect,
  statesForSelect,
  formatDateToDayTime,
  getStateName,
  getDepartmentName,
  formatEmployeeForm,
  filterEmployees,
} from "./utils";
import { departmentsData } from "../data/departmentsData.ts";
import { statesData } from "../data/statesData.ts";

describe("departmentsForSelect", () => {
  it("should return the departments data with id", () => {
    const result = departmentsForSelect();
    const expected = departmentsData.map((department, index) => ({
      name: department.name,
      id: index,
    }));
    expect(result).toEqual(expected);
  });
});

describe("statesForSelect", () => {
  it("should return the states data with id", () => {
    const result = statesForSelect();
    const expected = statesData.map((state, index) => ({
      name: state.name,
      abbreviation: state.abbreviation,
      id: index,
    }));
    expect(result).toEqual(expected);
  });
});

describe("formatDateToDayTime", () => {
  it("should return the date formatted to day time", () => {
    const date = new Date("2021-09-01");
    const result = formatDateToDayTime(date);
    expect(result).toEqual("01/09/2021");
  });

  it("should return an empty string if the date is null", () => {
    const result = formatDateToDayTime(null);
    expect(result).toEqual("");
  });

  it("should return an empty string if the date is undefined", () => {
    const result = formatDateToDayTime(undefined);
    expect(result).toEqual("");
  });
});

describe("getStateName", () => {
  it("should return the state name", () => {
    const state: State = { name: "California", abbreviation: "CA", id: 0 };
    const result = getStateName(state);
    expect(result).toEqual("California");
  });

  it("should return an empty string if the state is null", () => {
    const result = getStateName(null);
    expect(result).toEqual("");
  });
});

describe("getDepartmentName", () => {
  it("should return the department name", () => {
    const department: Department = { name: "Sales", id: 0 };
    const result = getDepartmentName(department);
    expect(result).toEqual("Sales");
  });

  it("should return an empty string if the department is null", () => {
    const result = getDepartmentName(null);
    expect(result).toEqual("");
  });
});

describe("formatEmployeeForm", () => {
  it("should return the employee form formatted", () => {
    const employee: EmployeeForm = {
      firstName: "John",
      lastName: "Doe",
      startDate: new Date("2021-09-01"),
      department: { name: "Sales", id: 0 },
      birthDate: new Date("1990-01-01"),
      street: "123 Main St",
      city: "Los Angeles",
      state: { name: "California", abbreviation: "CA", id: 0 },
      zipCode: "90001",
    };

    const result = formatEmployeeForm(employee);
    expect(result).toEqual({
      id: Date.now(),
      firstName: "John",
      lastName: "Doe",
      startDate: "01/09/2021",
      department: "Sales",
      birthDate: "01/01/1990",
      street: "123 Main St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90001",
    });
  });

  it("should return the employee form formatted with empty strings if the employee form is null", () => {
    const employee: EmployeeForm = {
      firstName: "",
      lastName: "",
      startDate: null,
      department: null,
      birthDate: null,
      street: "",
      city: "",
      state: null,
      zipCode: "",
    };

    const result = formatEmployeeForm(employee);
    expect(result).toEqual({
      id: Date.now(),
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      birthDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  });
});

describe("filterEmployees", () => {
  it("should return the employees filtered by the search query", () => {
    const employees = [
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Sales",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
      {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Engineering",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
    ];

    const searchQuery = "John";
    const result = filterEmployees(searchQuery, employees);
    console.log(result);
    expect(result).toEqual([
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Sales",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
    ]);
  });

  it("should return all employees if the search query is empty", () => {
    const employees = [
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Sales",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
      {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Engineering",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
    ];

    const searchQuery = "";
    const result = filterEmployees(searchQuery, employees);
    expect(result).toEqual([
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Sales",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
      {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Engineering",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
    ]);
  });

  it("should return an empty array if the search query does not match any employee", () => {
    const employees = [
      {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Sales",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
      {
        id: 1,
        firstName: "Jane",
        lastName: "Doe",
        startDate: "01/09/2021",
        department: "Engineering",
        birthDate: "01/01/1990",
        street: "123 Main St",
        city: "Los Angeles",
        state: "California",
        zipCode: "90001",
      },
    ];

    const searchQuery = "Alice";
    const result = filterEmployees(searchQuery, employees);
    expect(result).toEqual([]);
  });
});
