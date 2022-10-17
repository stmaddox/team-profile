const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer(
    "Brad",
    1,
    "email@test.com",
    "bradhub",
    "Engineer",
  );

  expect(engineer.name).toBe("Brad");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toBe("bradhub");
  expect(engineer.getGithub()).toBe("bradhub");
});
