
const fs = require('fs');
const inquirer = require('inquirer');
const markdownGen = require('./Develop/utils/markdownGen');
const generateSite = require('./Develop/utils/generateSite');
//const { title } = require('process');
const path = require('path');


//inquirer to generate questions
const promptQuestions = () => {
    return inquirer
        .prompt([

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
            {
                type: 'confirm',
                name: 'confirmInstall',
                message: 'Would You Like To Enter An Istallation Guide Regarding Your Project?',
                default: true
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
            {
                type: 'checkbox',
                name: 'languages',
                message: 'What Language(s) Did You Use To Build This Project? (Check all that apply)',
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Emai Required.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the GitHub link to your project. (Required)',
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Project Github Link Required.');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'What is your license?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            }

        ])
        .then((promptData) => {

            writeToFile("./Develop/utils/dist/README.md", markdownGen({ ...promptData }))
            promptImage()


        }
        )
};
const promptImage = () => {
    // console.log('ADD IMAGE LINK');
    //  if (!imageData) {
    //     // imageData = [];
    // // }
    return inquirer
        .prompt([
            {
                type: "confirm",
                name: "confirmImage",
                message: "Would You Like To Add Images To Your README.MD Description?",
                default: false
            },
            {
                type: "input",
                name: "images",
                message: "Please Enter A Link To Your Image Here:",
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a Image(s) link!');
                        return false;
                    }
                }
            },
        ])
    // .then(projectAssets => {
    //     imageData.push(projectAssets);
    //     if (projectAssets.images) {
    //         return promptImage(imageData);
    //     } else {
    //         return imageData=[];
    //     }
    // });
};

// };

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

promptQuestions()
    // .then(promptImage)
    .then(promptData => {
        return generateSite(promptData);
    })
    .then((promptData) => {
        writeToFile("./Develop/utils/dist/README.md", markdownGen({ ...promptData }).toString())
        console.log('Page Created Located Inside Of utils/dist folder!');
    }
    )
    .catch(err => {
        console.log(err);
    }
    );




