import { describe, it, expect } from "vitest";
import type {
  State,
  Department,
  EmployeeForm,
} from "../types/employees.type.ts";
import {
  departmentsForSelect,
  formatDateToDayTime,
  getStateName,
  getDepartmentName,
  formatEmployeeForm,
  filterEmployees,
} from "./utils";

describe("departmentsForSelect", () => {
  it("should return the departments data with id", () => {
    const result = departmentsForSelect();
    expect(result).toEqual([
      {
        id: 0,
        name: "Sales",
      },
      {
        id: 1,
        name: "Marketing",
      },
      {
        id: 2,
        name: "Engineering",
      },
      {
        id: 3,
        name: "Human Resources",
      },
      {
        id: 4,
        name: "Legal",
      },
    ]);
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

  it("should return an empty string if the state is undefined", () => {
    const result = getStateName(undefined);
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

  it("should return an empty string if the department is undefined", () => {
    const result = getDepartmentName(undefined);
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
    const result = formatEmployeeForm(null);
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
