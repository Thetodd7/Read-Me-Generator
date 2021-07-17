// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "what is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "Please enter the title of your project"
  },
  {
    type: "input",
    name: "description",
    message:"Please enter a description of this project and its purpose.",
  },
  {
    type: "list",
    name: "license",
    message:"What license should be included in your project? Please check all that apply.",
    choices:[
        "MIT", 
        "APACHE 2.0", 
        "GLP 3.0", 
        "BSD 3", 
        "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "what commands should be ran to install the dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "what commands should be ran to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "what does the user need to know about using the repo?",
    default: "npm start"
  },
  {
    type: "input",
    name: "contributing",
    message: "what does the user need to know in order to contribute to the repo?",
    default: "Please feel free to collaborate with me on this project. Just fork it and submit a well documented pull request."
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  console.log("writing to file");
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("Generate-README.md", generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.Error) {
        // Prompt could not be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
