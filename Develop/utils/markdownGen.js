  function renderImage(images) {
    if (images !== 'None') {
        return `
        ![](${images})
        `
    }else{
        return " "
    }

}


// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'None'){
        return `
        GitHubLicense: HTTPS://img.shields.io/badge/license-${license}-blue.svg
        `
    }else { 
    return " "
    }
}

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
function renderLicenseSection(license) {
    if(license !== 'None'){
        return `#license 
        This project is licensed under ${license}
        `
    } else {
        return " "
    }
}


function markdownGen(data) {
    return `
    #projectTitle: ${data.title}
    #projectDescription: ${data.description}
    #projectInstall: ${data.install}
    #projectLanguages: ${data.languages}
    #projectEmail: ${data.email}
    #projectGithub: ${data.github}
    #projectLicense: ${renderLicenseBadge(data.license)}
   ${renderLicenseSection(data.license)}
   #projectImage: ${renderImage(data.images)}
    `
}
module.exports = markdownGen

// ${renderLicenseLink(data.license)}
// 