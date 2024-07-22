export default function createIteratorObject(report) {
  const employeesByDepartment = report.allEmployees;
  const departments = Object.keys(employeesByDepartment);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      const currentDepartment = departments[currentDepartmentIndex];
      const employees = employeesByDepartment[currentDepartment];

      if (currentEmployeeIndex >= employees.length) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }

      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentEmployee = employees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: currentEmployee, done: false };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
