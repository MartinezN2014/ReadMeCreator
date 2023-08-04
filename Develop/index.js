// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Add a title to your README",
  },
  {
    type: "input",
    name: "description",
    message: "Add a description",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the README",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how to use it",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Add everyone who helped you with their GitHub, and link to any websites you might of used.",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use?",
    choices: ["MIT", "Apache", "GNU"],
  },
  {
    type: "input",
    name: "features",
    message: "List all the features for the project",
  },
  {
    type: "input",
    name: "contribute",
    message: "How can you contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you run the test for the application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github?",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((res) => {
    const markDown = generateReadme(res);
    fs.writeFileSync("./output/README.md", markDown);
    console.log("Your README has been generated");
  });
}

// Function call to initialize app
init();
