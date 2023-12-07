// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Please add any contributors to this project'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your guidelines for how to contribute to this project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Is there a license associated with this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add any tests that you may have already created for your application'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can people contact you about this project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);

        console.log(answers);
        fs.promises.readFile('sample.md', 'utf-8');
        fs.promises.writeFile('sample.md', JSON.stringify(generateMarkdown(answers)));
        
    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();
