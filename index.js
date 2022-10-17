const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamDisplay = require("./src/mainPage");
const fs = require('fs');

const employeeAnswers = [];

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id number?",
  },
  {
    type: "input",
    name: "email",
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
    employeeAnswers.push(answers);
    if (answers.additional) {
      enterEmployee();
    } else {
      return employeeAnswers;
    }
  }).then(answers => {
    console.log(answers);
    const empCards = []
    for(let i=0; i < employeeAnswers.length; i++) {
    if (employeeAnswers[i].role === "Engineer") {
      const { name, id, email, github } = employeeAnswers[i]
      const engineer = new Engineer(name, id, email, github)

      let newCard = engineerCard(engineer.name, engineer.id, engineer.email, engineer.github)
      newCard.push(newCard);
    } else if (employeeAnswers[i].role === "Intern") {
      const { name, id, email, school } = employeeAnswers[i]
      const intern = new Intern(name, id, email, school)

      let newCard = internCard(intern.name, intern.id, intern.email, intern.school)
      newCard.push(newCard);
    } else {
      const { name, id, email, office } = employeeAnswers[i]
      const manager = new Manager(name, id, email, office)

      let newCard = managerCard(manager.name, manager.id, manager.email, manager.office)
      newCard.push(newCard);
    }
  }
    return empCards;
  })
  .then(array => {
    return teamDisplay(array);
  })
  .then(teamInfo => {
    fs.writeFile('./assets/index.html', teamInfo, err => {
      console.error(err);
    })
  })
  .catch(err => {
    console.log(err);
  })
};

enterEmployee();