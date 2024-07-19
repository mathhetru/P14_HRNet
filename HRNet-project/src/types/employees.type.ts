export interface EmployeeForm {
  firstName: string;
  lastName: string;
  startDate: DateEmployee;
  department: Department;
  birthDate: DateEmployee;
  street: string;
  city: string;
  state: State;
  zipCode: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  birthDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export type DateEmployee = Date | undefined | null;

export type State = {
  name: string;
  abbreviation: string;
  id: number;
} | null;

export type Department = {
  name: string;
  id: number;
} | null;
