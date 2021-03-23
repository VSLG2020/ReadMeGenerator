const fs = require('fs');
const {resolve} = require('path');


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./Develop/utils/dist/README.md', (fileContent).toString(), err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File Created In Utils/dist!'
        });
      });
    });
  };
  
  
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }
// function runApp() {
//     inquirer.prompt(promptQuestions).then(function (responses) {
//         writeToFile('README.md', markdownGen({
//             ...responses
//         }))
//     })
// }
// runApp()

module.exports = writeFile ;