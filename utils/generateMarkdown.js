

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function createMD(answers) {
  return (`
# ${answers.title}

## Description
${answers.description} 

## Table of Contents
[Installation](#installation) <br \>
[Usage](#usage) <br \>
[License](#license) <br \>
[Contributing](#Contributing) <br \>
[Tests](#Tests) <br \> 
[Questions](#Questions) <br \>

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contribution
${answers.contribution}

## Tests
${answers.tests}

## Questions
GitHub Profile: [${answers.username}](https://github.com/${answers.username}) <br \>
Email: ${answers.email}
`)
};

module.exports = { createMD };
