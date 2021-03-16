//node modules
const fs = require('fs');
const inquirer = require('inquirer');
//const { title } = require('process');
const path = require('path')
const markdownGen = require('./Develop/utils/markdownGen')
const generatePage = require('./src/page-template');

//inquirer to generate questions
var questions =
    [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would You Like To Enter A Description Regarding Your Project?',
            default: true
        },
        {
            type: 'input',
            message: 'Please Enter A Description of Your Project',
            name: 'about',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would You Like To Enter An Istallation Guide Regarding Your Project?',
            default: true
        },
        {
            type: 'input',
            message: 'Please Enter Your Projects Installation Instructions for the User',
            name: 'install',
            when: ({ confirmInstall }) => confirmInstall
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                return false;
              }
            }
          },
        {
            type: 'list',
            message: 'What is your license?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        }
    ]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
function runApp() {
    inquirer.prompt(questions).then(function (responses) {
        writeToFile('README.md', markdownGen({
            ...responses
        }))
    })
}
runApp()

    // )
// //write the user response into a new file
// .then(([
//     {
//         title,
//         installation,
//         instructions,
//         credit,
//         license,
//         git,
//         linkedin,
//         email,
//         usage,
//         contribution
//     }]

// ) => {
//     const template = `# ${title},

//     * [Installation](#installation)
//     * [Usage](#usage)
//     * [Contribution](#contribution)
//     * [Credits] (#credits)
//     * [License](#license)
//     * Installation
//     ${installation}
//     ## Usage
//     ${Usage}
//     ## Contribution
//     ${contribution}
//     ### instructions
//     ${instructions}
//     ## Credits
//     ${credits}
//     ## License
//     ${license}

//     # Contact
//     * GitHub :${git}
//     * Linkedin :${linkedin}
//     * E-mail :${email}`;
//     //
//     // create new file function
// createNewFile(title, template);
// });

// function createNewFile(filename,data){


//     fs.writeFile(`./${filename.toLowerCase().split(' ').join('_')}.md`, JSON.stringify(data, null, '\t'), function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log('Success!');
//     });

// };