// providing a couple common licenses for users
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

function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'Apache License') {
    licenseLink = '[Apache License, Version 2.0](https://opensource.org/license/apache-2-0/)';
  } else if (license === 'GNU General Public License v3.0') {
    licenseLink = '[GNU General Public License version 3](https://opensource.org/license/gpl-3-0/)';
  } else if (license === 'MIT License') {
    licenseLink = '[The MIT License](https://opensource.org/license/mit/)';
  }
  return licenseLink;
};

function renderLicenseSection(license) {
  let licenseSection = '';
  
  if (license.length > 0) {
    licenseSection = '## License'
  } 
  return licenseSection;
};

// format for generatedREADME and mapping respective content 
function createMD(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
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

${licenseSection}
${licenseLink}

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
