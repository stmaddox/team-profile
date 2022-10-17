const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Brad", 1, "email@test.com", "MIT", "Intern");

  expect(intern.name).toBe("Brad");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toBe("MIT");
  expect(intern.getName()).toBe("Brad");
  expect(intern.getId()).toBe(1);
  expect(intern.getEmail()).toBe("email@test.com");
  expect(intern.getRole()).toBe("Intern");
  expect(intern.getSchool()).toBe("MIT");
});
