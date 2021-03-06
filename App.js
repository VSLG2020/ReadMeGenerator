const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown'); //markdown page with js function (working links)
const generateSite = require('./Develop/utils/generateSite') //writeFile with writefile function

//function of questions with confirm/input/validate options for the readme criteria.
const readmeReqs = () => {
    return inquirer
        .prompt([
            //title
            {
                type: 'input',
                name: 'title',
                message: 'What Is The Project Title?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Project Title Required.');
                        return false;
                    }
                }
            },
            //description
            {
                type: 'confirm',
                name: 'confirmDescription',
                message: 'Please Confirm To Add A Description Of Your Project. (Required)',
                default: true
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please Write A Description of Your Project Here:',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Project Description Required.');
                        return false;
                    }
                }
            },
            //Install
            {
                type: 'confirm',
                name: 'confirmInstall',
                message: 'Would You Like To Enter An Istallation Guide Regarding Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'install',
                message: 'Please Enter Your Projects Installation Instructions for the User',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Project Install Instructions Required.');
                        return false;
                    }
                }
            },
            // Table of Contents
            {
                type: "confirm",
                name: "confirmContentsTable",
                message: "Would You Like To Add A Table Of Contents",
                default: false
            },
            {
                type: "checkbox",
                name: "contentsTable",
                message: "Please Check All That Apply For Your Table Of Contents. (Press <space> to select, <a> to toggle all, <i> to invert selection)",
                choices: [
                    "Installation",
                    new inquirer.Separator(),
                    "Usage",
                    new inquirer.Separator(),
                    "Tests",
                    new inquirer.Separator(),
                    "Languages",
                    new inquirer.Separator(),
                    "License",
                    new inquirer.Separator(),
                    "Credits",
                    new inquirer.Separator(),
                    "Github",
                    new inquirer.Separator(),
                    "contribution",
                    new inquirer.Separator(),
                    "Images",
                    new inquirer.Separator(),
                    "Email",
                    new inquirer.Separator(),
                    "Badges",
                    new inquirer.Separator(),
                ],
            },
            //Usage
            {
                type: 'confirm',
                name: 'confirmUsage',
                message: 'Would You Like To Enter A Usage Description Regarding Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please Enter Your Projects Usage Description For The User. ',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Project Usage Description Required.');
                        return false;
                    }
                }
            },
            //languages
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What Language(s) Did You Use To Build This Project? ( (Press <space> to select, <a> to toggle all, <i> to invert selection))',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            //contribution
            {
                type: 'confirm',
                name: 'contribution',
                message: 'Would You Like To Add How To Contribute To Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'contributionInput',
                message: 'Please Add All Contributing Preferences Here:',
                validate: contributionInput => {
                    if (contributionInput) {
                        return true;
                    } else {
                        console.log('Contributing Description Required.');
                        return false;
                    }
                }
            },
            //tests
            {
                type: 'confirm',
                name: 'testsConfrim',
                message: 'Would You Like To Include Example(s) On How To Test Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please Provide An Example On How To Test Your Project',
                validate: testsInput => {
                    if (testsInput) {
                        return true;
                    } else {
                        console.log('Project Tests Required.');
                        return false;
                    }
                }
            },
            //email
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Email Required.');
                        return false;
                    }
                }
            },
            //github
            {
                type: 'input',
                name: 'github',
                message: 'Enter the GitHub link to your project. (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Project Github Link Required.');
                        return false;
                    }
                }
            },
            //license
            {
                type: 'list',
                name: 'license',
                message: 'What is your license?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },
            //credits
            {
                type: 'confirm',
                name: 'creditsConfrim',
                message: 'Would You Like To Include A List Of A/The Collaborator(s) for Your Project? ',
                default: false
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Please Provide A List Of Your Collaborator(s) Here: Seperate Names With -, Or Add Email/GH Link In A [ ]',
                validate: creditsInput => {
                    if (creditsInput) {
                        return true;
                    } else {
                        console.log('Project Credits Required.');
                        return false;
                    }
                }
            },
            //images
            {
                type: "confirm",
                name: "confirmImage",
                message: "Would You Like To Add Images To Your README.MD Description?",
                default: false
            },
            {
                type: "input",
                name: "images",
                message: "Please Enter A Link To Your Image Here: Please Include Url In ( ):",
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a Image(s) link!');
                        return false;
                    }
                }
            }
        ])
};

//function initializing
function App() {

}
// function call to initialize program
App();
//calling the questions {}
readmeReqs()
    //this takes the answers to add to the Readme on generatesite file
    .then((promptData) => {
        return generateMarkdown(promptData);
    })
    .then(writeToFile => {
        return generateSite(writeToFile)
    })


