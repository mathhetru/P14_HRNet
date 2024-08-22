import { create } from "zustand";
import { Employee } from "../types/employees.type.ts";

// TODO delete devtools in production
import { devtools } from "@pavlobu/zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface EmployeesStore {
  numberOfEmployees: (employeesList: Employee[]) => void;
  employeesList: Employee[];
  addEmployee: (employee: Employee) => void;
}

// TODO delete devtools in production
export const useStore = create<EmployeesStore>()(
  // @ts-expect-error devtools error ts
  devtools(
    // @ts-expect-error immer error ts
    immer((set) => ({
      employeesList: [],
      numberOfEmployees: (employeesList: Employee[]) => employeesList.length,
      addEmployee: (employee: Employee) => {
        set((state) => ({ employeesList: [...state.employeesList, employee] }));
      },
    })),
  ),
);
