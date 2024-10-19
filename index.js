// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // 1. updateEmployeeWithKeyAndValue(employee, key, value)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey(employee, key)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey(employee, key)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  
  