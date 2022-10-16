const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamDisplay = require("./src/mainPage");
const fs = require('fs');

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
  }).then(answers => {
    const empCards = []
    if (answers[i].role === "Engineer") {
      const { name, id, email, github } = answers[i]
      const Engineer = new Engineer(name, id, email, github)

      let newCard = engineerCard(Engineer.name, Engineer.id, Engineer.email, Engineer.github)
      newCard.push(newCard);
    } else if (answers[i].role === "Intern") {
      const { name, id, email, school } = answers[i]
      const Intern = new Intern(name, id, email, school)

      let newCard = internCard(Intern.name, Intern.id, Intern.email, Intern.school)
      newCard.push(newCard);
    } else {
      const { name, id, email, office } = answers[i]
      const Manager = new Manager(name, id, email, office)

      let newCard = managerCard(Manager.name, Manager.id, Manager.email, Manager.office)
      newCard.push(newCard);
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