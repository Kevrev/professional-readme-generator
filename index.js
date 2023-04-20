// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of this project?",
    "Briefly describe this project.",
    "What are the installation instructions?",
    "How does a user use this application?",
    "What are the contribution guidelines for this project?",
    "List any tests for this project.",
    "What kind of license does this project use?",
    "What is your GitHub user name?",
    "What is your email?",
];

inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: questions[0]
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: questions[1]
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: questions[2]
    },
    {
        type: 'input',
        name: 'userInstructions',
        message: questions[3]
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: questions[4]
    },
    {
        type: 'input',
        name: 'tests',
        message: questions[5]
    },
    {
        type: 'list',
        name: 'license',
        message: questions[6],
        choices: ['Apache License', 'GNU General Public License', 'MIT License',]
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: questions[7]
    },
    {
        type: 'input',
        name: 'email',
        message: questions[8]
    },
]).then((answers) => {
    console.log(answers);
});




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
