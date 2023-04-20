const fs = require('fs');

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

function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'Apache License') {
     licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
     licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'MIT License') {
     licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } 
    return licenseBadge;
};

// function renderLicenseLink(license) {
//   let licenseLink = '';

//   if (license === 'Apache License') {
//      licenseLink = '[![License](https://img.shields.io/Link/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//   } else if (license === 'GNU General Public License v3.0') {
//      licenseLink = '[![License: GPL v3](https://img.shields.io/Link/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//   } else if (license === 'MIT License') {
//      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   } 
//     return licenseLink;
// };


function renderLicenseSection(license) {
  let licenseSection = '';

  if (license === 'Apache License') {
    licenseSection = fs.readFileSync('./utils/apache.md', 'utf8');
  } else if (license === 'GNU General Public License v3.0') {
    licenseSection = fs.readFileSync('./utils/gpl3.md', 'utf8');
  } else if (license === 'MIT License') {
    licenseSection = fs.readFileSync('./utils/mit.md', 'utf8');
  }
  return licenseSection;
}


function createMD(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  // const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return (`
# ${answers.title}

${licenseBadge}

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
${licenseLink}
${licenseSection}

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
