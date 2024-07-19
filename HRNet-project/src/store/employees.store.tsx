import { create } from "zustand";
import { EmployeesStore, Employee } from "../types/employees.type.ts";

export const useStore = create<EmployeesStore>()((set) => ({
  employeesList: [
    {
      id: "1",
      firstName: "Forrest",
      lastName: "Gump",
      startDate: null,
      department: "Engineering",
      // dateOfBirth: "December 17, 1995",
      dateOfBirth: new Date("December 17, 1995 03:24:00"),
      street: "Mother's House",
      city: "Greenbow",
      state: "Alabama",
      zipCode: "59810",
    },
  ],
  numberOfEmployees: (employeesList: Employee[]) => employeesList.length,
  addEmployee: (employee: Employee) =>
    set((state) => ({ employeesList: [...state.employeesList, employee] })),
}));
