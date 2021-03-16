//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const path = require('path')
const markdownGen = require('./utils/markdownGen.js')

//inquirer to generate questions
var questions =
    [
        {
        type: 'input',
        message: 'What is the project title?',
        name:'name'
        },
    
        {
        type: 'input', 
        message: 'What is your email?',
        name:'email'
        },
        {
            type: 'input', 
            message: 'What is your github?',
            name:'github'
            },
            {
                type: 'list', 
                message: 'What is your license?',
                name:'license',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
                }
    ]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
function runApp(){
    inquirer.prompt(questions).then(function(responses){
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