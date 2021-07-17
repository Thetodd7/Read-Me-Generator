// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge, link;
const renderLicenseBadge = (license) => {
  switch (license) {
  case 'MIT':
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    return badge;
  case 'APACHE 2.0':
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
    return badge;
  case 'GPL 3.0':
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    return badge;
  case 'BSD 3':
    badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
    return badge;
  default:
    return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      link = '(https://opensource.org/licenses/MIT)';
      return link;
    case 'APACHE 2.0':
      link = '(https://opensource.org/licenses/Apache-2.0)';
      return link;
    case 'GPL 3.0':
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      return link;
    case 'BSD 3':
      link = '(https://opensource.org/licenses/BSD-3-Clause)';
      return link;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {

  if (license == ""){
    let section = "";
    return section;
  }
  else {
    let section = `## License \n\n[${license} License]${renderLicenseLink(license)}`
    return section;
  }


}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  let content = `
  # ${data.title} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  * [Description](#Description)
  * [Usage](#Usage)
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [License](#License)
  * [Contributions](#Contributions)
  

  ## Usage

  ${data.usage}

  ## Installation

  To install please run ${data.installation}

  ## Tests 

  To test please run ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contributions
  
  ${data.contribute}
 
  If you have any questions, please contact me on GitHub [${data.github}](https://github.com/${data.github}) or email me at ${data.email} 
`

  return content;
};

module.exports = generateMarkdown;
