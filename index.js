// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the Title of your project?",
                name: 'title',
            },
            {
                type: 'input',
                message: "What is the Description of your project?",
                name: 'description',
            },
            {
                type: 'input',
                message: "What is the Link to your project on GitHub Pages?",
                name: 'link',
            },
            {
                type: 'input',
                message: "What is your 1st Usage picture file called?",
                name: 'UsagePic1',
            },
            {
                type: 'input',
                message: "What is the description of the 1st usage picture?",
                name: 'UsagePic1Description',
            },
            {
                type: 'input',
                message: "What is the Usage shown in the 1st picture?",
                name: 'Usage1',
            },
            {
                type: 'input',
                message: "What is your 2nd Usage picture file called?",
                name: 'UsagePic2',
            },
            {
                type: 'input',
                message: "What is the description of the 2nd usage picture?",
                name: 'UsagePic2Description',
            },
            {
                type: 'input',
                message: "What is the Usage shown in the 2nd picture?",
                name: 'Usage2',
            },
            {
                type: 'input',
                message: "Who is the 1st person who Contributed?",
                name: 'Credit1',
            },
            {
                type: 'input',
                message: "Who is the 2nd person who Contributed?",
                name: 'Credit2',
            },
            {
                type: 'input',
                message: "Who is the 3rd person who Contributed?",
                name: 'Credit3',
            },
            {
                type: 'list', 
                message: "What license do you want for you project?",
                name: 'License',
                choices: ['GNU', 'ISC', 'MIT']
            },
            {
                type: 'input',
                message: "What are your tests?",
                name: 'tests',
            },
            {
                type: 'input',
                message: "What is your GitHub Username?",
                name: 'GitName',
            },
            {
                type: 'input',
                message: "What is the link to your GitHub?",
                name: 'GitURL',
            },
            {
                type: 'input',
                message: "What is your Email Address?",
                name: 'email',
            },
          
])

// TODO: Create a function to write README file
.then((data) => {

    const readmeContent = generateMarkdown(data);
    fs.writeFile('README.md', readmeContent, 
        (err) => err ? console.log(err): console.log('File was created!')) 
    
})]


// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
