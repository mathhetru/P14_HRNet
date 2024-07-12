import { create } from "zustand";
import { EmployeesStore, Employee } from "../types/employees.type.ts";

export const useStore = create<EmployeesStore>()((set) => ({
  employeesList: [],
  // employees: (employeesList: Employee[]) => employeesList.length,
  addEmployee: (employee: Employee) =>
    set((state) => ({ employeesList: [...state.employeesList, employee] })),
}));
