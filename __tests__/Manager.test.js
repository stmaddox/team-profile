const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Brad", 1, "email@test.com", "Manager", 350);

  expect(manager.name).toBe("Brad");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getName()).toBe("Brad");
  expect(manager.getId()).toBe(1);
  expect(manager.getEmail()).toBe("email@test.com");
});
