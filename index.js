const inquirer = require("inquirer");
const fs = require('fs')
const { createMD } = require('./utils/generateMarkdown')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log(`File ${fileName} was created`);
    });
}

function init() {
    const questions = [
        "What is the title of this project?",
        "Briefly describe this project.",
        "What are the installation instructions?",
        "How does a user use this application?",
        "What kind of license does this project use?",
        "What are the contribution guidelines for this project?",
        "List any tests for this project.",
        "What is your GitHub user name?",
        "What is your email?",
    ];

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['', 'Apache License', 'GNU General Public License v3.0', 'MIT License',]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8]
        },
    ]).then((answers) => {

        writeToFile('README.md', createMD(answers));

    });
}

// Function call to initialize app
init();
