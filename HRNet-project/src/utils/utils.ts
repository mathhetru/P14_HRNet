import { departmentsData } from "../data/departmentsData.ts";
import { statesData } from "../data/statesData.ts";
import type {
  EmployeeForm,
  DateEmployee,
  State,
  Department,
} from "../types/employees.type.ts";

export const departments = () => {
  return departmentsData.map((department: { name: string }, index: number) => ({
    name: department.name,
    id: index,
  }));
};

export const states = () => {
  return statesData.map(
    (state: { name: string; abbreviation: string }, index: number) => ({
      name: state.name,
      abbreviation: state.abbreviation,
      id: index,
    }),
  );
};

const formatDateToDayTime = (date: DateEmployee) => {
  return date ? new Date(date).toLocaleDateString() : "";
};

const getStateName = (state: State) => {
  return state ? state.name : "";
};

const getDepartmentName = (department: Department) => {
  return department ? department.name : "";
};

export const formatEmployeeForm = (employee: EmployeeForm) => {
  return {
    id: Date.now(),
    firstName: employee.firstName,
    lastName: employee.lastName,
    startDate: formatDateToDayTime(employee.startDate),
    department: getDepartmentName(employee.department),
    birthDate: formatDateToDayTime(employee.birthDate),
    street: employee.street,
    city: employee.city,
    state: getStateName(employee.state),
    zipCode: employee.zipCode,
  };
};
