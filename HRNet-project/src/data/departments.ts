const departmentsData = [
  { name: "Sales" },
  { name: "Marketing" },
  { name: "Engineering" },
  { name: "Human Resources" },
  { name: "Legal" },
];

export const departments = () => {
  return departmentsData.map(
    (department: { name: string }, index: number) => ({
      name: department.name,
      id: index,
    }),
  );
};