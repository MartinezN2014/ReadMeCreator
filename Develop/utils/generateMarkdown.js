// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](${renderLicenseBadge(data.license)})

  ## Descryption
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License](#license)
  5. [Features](#features)
  6. [How to Contribute](#contribute)
  7. [Test](#test)
  8. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License 
  This application uses ![license](${renderLicenseBadge(data.license)})

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})
  
`;
}

module.exports = generateMarkdown;
