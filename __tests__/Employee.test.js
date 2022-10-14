const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Brad", 1, "email@test.com", "Engineer");

  expect(employee.name).toBe("Brad");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.getName()).toBe("Brad");
  expect(employee.getId()).toBe(1);
  expect(employee.getEmail()).toBe("email@test.com");
  expect(employee.getRole()).toBe("Engineer");
});
