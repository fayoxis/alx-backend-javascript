export default function createIteratorObject(report) {
  const employeeEntries = [];

  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      employeeEntries.push([department, employee]);
    }
  }

  return employeeEntries[Symbol.iterator]();
}
