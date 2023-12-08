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
        type: 'checkbox',
        name: 'license',
        message: 'Is there a license associated with this project? Choose one of the following',
        choices: ['MIT', 'GNU GPL', 'APACHE', 'Mozilla Public License', 'Unilicense', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add any tests that you may have already created for your application'
    },
    {
        type: 'input',
        name: 'github',
        message: 'If applicable, please enter the Github username associated with this project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'If applicable, please enter the email that you would like questions about the project to be directed to'
    }
];

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
        console.log("One second...")
        const markdown = generateMarkdown(answers);

        fs.promises.writeFile('sampleREADME.md', markdown, 'utf-8');
        
    } catch (err) {
        console.error(err);
    }
}

// Function call to initialize app
init();
