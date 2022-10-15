const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Brad", 1, "email@test.com", "manager", 350);

  expect(manager.name).toBe("Brad");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
  expect(manager.getName()).toBe("Brad"); 
  expect(manager.getId()).toBe(1);
  expect(manager.getEmail()).toBe("email@test.com");   
  // expect(manager.getOffice()).toBe(350);
});
