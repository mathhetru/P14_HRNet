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
      employeesList: [
        {
          id: 19684621,
          firstName: "Forrest",
          lastName: "Gump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1940",
          street: "Mother's House",
          city: "Greenbow",
          state: "Alabama",
          zipCode: "555",
        },
        {
          id: 19684621,
          firstName: "Gorrest",
          lastName: "Fump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1960",
          street: "ther's House",
          city: "eenbow",
          state: "Alabama",
          zipCode: "2543",
        },
        {
          id: 19684621,
          firstName: "Horrest",
          lastName: "Zump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1950",
          street: "other's House",
          city: "reenbow",
          state: "Alabama",
          zipCode: "40",
        },
        {
          id: 5465315,
          firstName: "Jenny",
          lastName: "DontKnow",
          startDate: "26/05/2024",
          department: "Marketing",
          birthDate: "30/08/1990",
          street: "GrandMa's House",
          city: "Greenbow",
          state: "Alabama",
          zipCode: "5345345",
        },
        {
          id: 19684621,
          firstName: "Forrest",
          lastName: "Gump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1940",
          street: "Mother's House",
          city: "Greenbow",
          state: "Alabama",
          zipCode: "555",
        },
        {
          id: 19684621,
          firstName: "Gorrest",
          lastName: "Fump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1960",
          street: "ther's House",
          city: "eenbow",
          state: "Alabama",
          zipCode: "2543",
        },
        {
          id: 19684621,
          firstName: "Horrest",
          lastName: "Zump",
          startDate: "24/05/2024",
          department: "Engineering",
          birthDate: "25/04/1950",
          street: "other's House",
          city: "reenbow",
          state: "Alabama",
          zipCode: "40",
        },
        {
          id: 5465315,
          firstName: "Jenny",
          lastName: "DontKnow",
          startDate: "26/05/2024",
          department: "Marketing",
          birthDate: "30/08/1990",
          street: "GrandMa's House",
          city: "Greenbow",
          state: "Alabama",
          zipCode: "5345345",
        },
      ],
      numberOfEmployees: (employeesList: Employee[]) => employeesList.length,
      addEmployee: (employee: Employee) => {
        set((state) => ({ employeesList: [...state.employeesList, employee] }));
      },
    })),
  ),
);
