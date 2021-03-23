const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const generateSite = require('./Develop/utils/generateSite');
//const { title } = require('process');
// const path = require('path');


//inquirer to generate questions
const readmeReqs = () => {
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
            {
                type: "confirm", 
                name: "confirmContentsTable",
                message: "Would You Like To Add A Table Of Contents",
                default: false
              },
              {
                type: "checkbox",
                name: "contentsTable",
                message: "Please Check All That Apply For Your Table Of Contents",
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
                    "Collaborators",
                    new inquirer.Separator(),
                    "Github",
                    new inquirer.Separator(),
                    "Contribution",
                    new inquirer.Separator(),
                    "Images",
                    new inquirer.Separator(),
                    "Email",
                    new inquirer.Separator(),
                    "Badges",
                    new inquirer.Separator(),
                ],
              },
            {
                type: 'confirm',
                name: 'confirmUsage',
                message: 'Would You Like To Enter A Usage Description Regarding Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please Enter Your Projects Usage Description For The User',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Project Usage Description Required.');
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
                type: 'confirm',
                name: 'contributors',
                message: 'Would You Like To Add How To Contribute To Your Project? ',
                default: false
            },
            {
                type: 'input',
                name: 'contributorsInput',
                message: 'Please Add All Contributing Preferences Here:',
                validate: contributorsInput => {
                    if (contributorsInput) {
                        return true;
                    } else {
                        console.log('Contributing Description Required.');
                        return false;
                    }
                }
            },
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
            {
                type: 'list',
                name: 'license',
                message: 'What is your license?',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
            },

            {
                type: 'confirm',
                name: 'collaboratorsConfrim',
                message: 'Would You Like To Include A List Of A/The Collaborator(s) for Your Project?',
                default: false
            },
            {
                type: 'input',
                name: 'collaborators',
                message: 'Please Provide A List Of Your Collaborator(s)',
                validate: collaboratorsInput => {
                    if (collaboratorsInput) {
                        return true;
                    } else {
                        console.log('Project Collaborators Required.');
                        return false;
                    }
                }
            },



      
        // )
// };
// const promptImage = () => {
//     // console.log('ADD IMAGE LINK');
//     //  if (!imageData) {
//     //     // imageData = [];
//     // // }
//     return inquirer
//         .prompt([
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
            }


        ])
        // .then((promptData) => {

        //     writeToFile("./Develop/utils/dist/README.md", generateMarkdown({ ...promptData }))
        //     promptImage()


        // },

        // ])
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

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// promptQuestions()
//     // .then(promptImage)
//     .then(promptData => {
//         return generateSite(promptData);
//     })
//     .then((promptData) => {
//         writeToFile("./Develop/utils/dist/README.md", generateMarkdown({ ...promptData }).toString())
//         console.log('Page Created Located Inside Of utils/dist folder!');
//     }
//     )
//     .catch(err => {
//         console.log(err);
//     }
//     );


function App() {

}

// function call to initialize program
App();

// call questions
readmeReqs()
// then pass answers to generateMarkdown
.then((promptData) => {
    return generateMarkdown(promptData);
})
// write MD file in dist folder
.then(pageMD => {
    return generateSite(pageMD)
})
