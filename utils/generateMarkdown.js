// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license[0] == 'None') {
    return "";
  } else {
    const licenseBadge = license[0].replace(" ","&ensp;");
    return `[![Generic badge](https://img.shields.io/badge/License-${licenseBadge}-purple.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license[0] == "None") {
    return "";
  } else {
    const licenseLink = license[0].toLowerCase().replace(" ", "-");
    return `https://choosealicense.com/licenses/${licenseLink}/`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);

  return `# ${data.title}

  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits 

  ${data.collaborators}

  ${data.contributing}

  ## License

  ${data.license}

  ${link}

  ## Tests

  ${data.tests}

  ## Questions
  If you have any questions or concerns about this project, reach out using either of the provided methods.

  Email: 
  ${data.email}

  Github:
  https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
