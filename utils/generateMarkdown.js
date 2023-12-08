// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = 'None') {
    return "";
  } else {
    const licenseBadge = license.replace(" ","&ensp;");
    return `[![Generic badge](https://img.shields.io/badge/License-${licenseBadge}-purple.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = "None") {
    return "";
  } else {
    const licenseLink = license.toLowerCase().replace(" ", "-");
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

  ${data.contributors}

  ${data.contributing}

  ## License

  ${data.license}
  ${link}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.email}

  ${data.github}
`;
}

module.exports = generateMarkdown;
