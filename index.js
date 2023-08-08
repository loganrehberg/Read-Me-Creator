// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
    try {
      const userResponses = await inquirer.prompt(questions);
  
      // Generate the README content using userResponses
  
      const readmeContent = `
  # ${userResponses.projectTitle}
  
  ## Description
  ${userResponses.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${userResponses.installation}
  
  ## Usage
  ${userResponses.usage}
  
  ## License
  ${userResponses.licenseBadge}
  ${userResponses.licenseNotice}
  
  ## Contributing
  ${userResponses.contributing}
  
  ## Tests
  ${userResponses.tests}
  
  ## Questions
  GitHub: [${userResponses.githubUsername}](https://github.com/${userResponses.githubUsername})
  Email: ${userResponses.email}
      `;
  
      writeToFile('README.md', readmeContent);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Function call to initialize app
  init();

// Function call to initialize app
init();
