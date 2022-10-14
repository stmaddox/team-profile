const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Brad",
    1,
    "email@test.com",
    "Engineer",
    "brad"
  );

  expect(engineer.name).toBe("Brad");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toBe("brad");
  expect(engineer.getGithub()).toBe("brad");
  expect(engineer.getRole()).toBe("Engineer");
});
