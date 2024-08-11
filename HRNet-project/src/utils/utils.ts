import { departmentsData } from "../data/departmentsData.ts";
import { statesData } from "../data/statesData.ts";
import type {
  Employee,
  EmployeeForm,
  DateEmployee,
  State,
  Department,
} from "../types/employees.type.ts";

export const departmentsForSelect = () => {
  return departmentsData.map((department: { name: string }, index: number) => ({
    name: department.name,
    id: index,
  }));
};

export const statesForSelect = () => {
  return statesData.map(
    (state: { name: string; abbreviation: string }, index: number) => ({
      name: state.name,
      abbreviation: state.abbreviation,
      id: index,
    }),
  );
};

export const formatDateToDayTime = (date: DateEmployee) => {
  return date ? new Date(date).toLocaleDateString() : "";
};

export const getStateName = (state: State) => {
  return state ? state.name : "";
};

export const getDepartmentName = (department: Department) => {
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

export const filterEmployees = (
  searchValue: string,
  employeesList: Employee[],
) => {
  return employeesList.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchValue) ||
      employee.lastName.toLowerCase().includes(searchValue) ||
      employee.department.toLowerCase().includes(searchValue) ||
      employee.street.toLowerCase().includes(searchValue) ||
      employee.city.toLowerCase().includes(searchValue) ||
      employee.state.toLowerCase().includes(searchValue) ||
      employee.zipCode.toLowerCase().includes(searchValue),
  );
};
