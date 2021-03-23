function renderImage(images) {
    if (images !== 'None') {
        return `
        ![](${images})
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


function renderLicenseSection(license) {
    if (license !== 'None') {
        return `#License 
        This Project Is Licensed Under ${license}
        `
    } else {
        return " "
    }
};


function markdownGen(data) {
    return `

    #Title
     ${data.title}

    ##Description
     ${data.description}

    ##Table Of Contents
     ${data.contentsTable}

    ##Install
    The Following Dependecies Are Required To Run The Application
     ${data.install}

    ##Usage
    These Are Our Usage Terms 
     ${data.usage}
   
    ##Languages
    Languages Used Are As Follows
     ${data.languages}
 

    ##License
     ${renderLicenseSection(data.license)}
    
    ##Github
    Find Our Project On GitHub!
     ${data.github}

    ##Contributions
     ${data.contributors}
   
    ##Tests
    Downloaded Our Application? Run Some Tests:
     ${data.tests}
   
    ##Images
     ${renderImage(data.images)}

    ##Collaborators 
    Special Thanks To Our Team:
      ${data.collaborators}

    ##Badge
     ${renderLicenseBadge(data.badges)}


   #Contact
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