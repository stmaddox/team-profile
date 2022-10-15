const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const answers = [];

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    id: "id",
    message: "What is the employee's id number?",
  },
  {
    type: "input",
    email: "email",
    message: "What is the employee's email address?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "school",
    message: "What college did the Intern attend?",
    when: (answers) => answers.role === "Intern",
  },
  {
    type: "input",
    name: "github",
    message: "What is the Engineer's github username?",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    name: "office",
    message: "What office is the manager located in?",
    when: (answers) => answers.role === "Manager",
  },
  {
    type: "confirm",
    name: "additional",
    message: "Would you like to add another employee?",
  },
];

const enterEmployee = function () {
  inquirer.prompt(questions).then((answers) => {
    answers.push(answers);
    if (answers.additional) {
      enterEmployee();
    } else {
      return answers;
    }
  }).then
};
