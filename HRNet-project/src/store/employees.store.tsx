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
        // {
        //   id: 19684621,
        //   firstName: "Forrest",
        //   lastName: "Gump",
        //   startDate: "24/05/2024",
        //   department: "Sales",
        //   birthDate: "25/04/1940",
        //   street: "Mother's House",
        //   city: "Greenbow",
        //   state: "Alabama",
        //   zipCode: "555",
        // },
        // {
        //   id: 19684622,
        //   firstName: "Indiana",
        //   lastName: "Jones",
        //   startDate: "18/05/1917",
        //   department: "Human Resources",
        //   birthDate: "01/07/1899",
        //   street: "38 Adler Avenue",
        //   city: "Fairfield",
        //   state: "New Jersey",
        //   zipCode: "2543",
        // },
        // {
        //   id: 19684623,
        //   firstName: "Ellen",
        //   lastName: "Ripley",
        //   startDate: "24/05/2122",
        //   department: "Engineering",
        //   birthDate: "07/01/2092",
        //   street: "Nostromo",
        //   city: "Solomons",
        //   state: "Maryland",
        //   zipCode: "20688",
        // },
        // {
        //   id: 19684624,
        //   firstName: "John",
        //   lastName: "McClane",
        //   startDate: "15/07/1988",
        //   department: "Engineering",
        //   birthDate: "12/05/1955",
        //   street: "Nakatomi Plaza",
        //   city: "Los Angeles",
        //   state: "California",
        //   zipCode: "90067",
        // },
        // {
        //   id: 19684625,
        //   firstName: "Sarah",
        //   lastName: "Connor",
        //   startDate: "12/05/1984",
        //   department: "Human Resources",
        //   birthDate: "28/08/1959",
        //   street: "Terminator's House",
        //   city: "Los Angeles",
        //   state: "California",
        //   zipCode: "90067",
        // },
        // {
        //   id: 19684626,
        //   firstName: "Marty",
        //   lastName: "McFly",
        //   startDate: "26/10/1985",
        //   department: "Marketing",
        //   birthDate: "04/07/1968",
        //   street: "9303 Lyon Drive",
        //   city: "Hill Valley",
        //   state: "California",
        //   zipCode: "95420",
        // },
        // {
        //   id: 19684627,
        //   firstName: "Rick",
        //   lastName: "Deckard",
        //   startDate: "25/06/1982",
        //   department: "Legal",
        //   birthDate: "07/01/2016",
        //   street: "Los Angeles",
        //   city: "Los Angeles",
        //   state: "California",
        //   zipCode: "90067",
        // },
      ],
      numberOfEmployees: (employeesList: Employee[]) => employeesList.length,
      addEmployee: (employee: Employee) => {
        set((state) => ({ employeesList: [...state.employeesList, employee] }));
      },
    })),
  ),
);
