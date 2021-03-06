function renderImage(images) {
    if (images !== 'None') {
        return `
      ${images}
        `
    } else {
        return " "
    }

};

function renderCredits(credits) {
    if (credits !== 'None') {
        return `
      ${credits}
        `
    } else {
        return " "
    }

};



function renderLicenseBadge(badges) {
    if (badges !== 'None') {
        return `
        GitHubLicense: HTTPS://img.shields.io/badge/license-${badges}-blue.svg
        `
    } else {
        return " "
    }
};

function renderContributions(contributions) {
    if (contributions !== 'None') {
        return `
      ${contributions}
        `
    } else {
        return " "
    }

};

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `#License 
        This Project Is Licensed Under ${license}
        `
    } else {
        return " "
    }
};

//markdown function organized in order of Readme preference.
// # labels the importance
// $ calls the responses generated from App.js "names" in function
//everything must be aligned perfectly (no spaces) in order to create the css/link properties of md
function markdownGen(data) {
    return `
   # Title
   ${data.title}

   ## Description
   ${data.description}

   ## Table Of Contents
   ${data.contentsTable}

   ## Install
   The Following Dependecies Are Required To Run The Application
   ${data.install}

   ## Usage
   These Are Our Usage Terms 
   ${data.usage}
   
   ## Languages
   Languages Used Are As Follows
   ${data.languages}
 
   ## License
   ${renderLicenseSection(data.license)}
    
   ## Github
   Find Our Project On GitHub!
   ${data.github}

   ## Contributions
   ${renderContributions(data.contributions)}
   
   ## Tests
   Downloaded Our Application? Run Some Tests:
   ${data.tests}
   
   ## Images
   ${renderImage(data.images)}

   ## Credits 
   Special Thanks To Our Team:
   ${renderCredits(data.credits)}
   
   ## Badge
   ${renderLicenseBadge(data.badges)}
   
   # Contact
   Questions or Inquiries, Please Contact Us At: 
   ${data.email}
   `;
};



module.exports = markdownGen;

// ${renderLicenseLink(data.license)}
// 

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if(license !== 'None'){
//         return `[alt text](https://github.com/${data.Username}/${data.Title})`
//     }else{
//         return " "
//     }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string