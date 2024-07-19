export interface EmployeesStore {
  numberOfEmployees: (employeesList: Employee[]) => void;
  employeesList: Employee[];
  addEmployee: (employee: Employee) => void;
}

export interface EmployeeForm {
  firstName: string;
  lastName: string;
  startDate: Date | null;
  department: string;
  dateOfBirth: Date | null;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Employee extends EmployeeForm {
  id: string;
}
