module.exports = function render (eslintVersion, configVersion, otherVersion) {
return `# eslint-config-eda

Linting configuration for Enspiral Dev Academy (EDA) challenges and projects.

## Installation

There are two versions of this package:
  1. \`0.1.x\` is the version with the rules we are using today (without Prettier)
  2. \`0.2.x\` is the version with the rules we are moving to in the future (with Prettier)

Install the exact version (-E) of this package and its peer dependency, [ESLint](http://eslint.org), as devDependencies (-D) based on the version you want to install. You can identify the versions by the end of the following installation commands.

\`npm i -DE eslint@${eslintVersion} eslint-config-eda@${configVersion}\`

or

\`npm i -DE eslint@${eslintVersion} eslint-config-eda@${otherVersion}\`

## Usage

Add \`eda\` to the \`extends\` section of your configuration file (you can omit the \`eslint-config-\` prefix). This is a minimal \`.eslintrc.json\` file (it goes in the root of your project):

\`\`\`json
{
  "extends": "eda"
}
\`\`\`

## Easy fixing in VS Code

If you're using VS Code and want to fix linting errors painlessly, install the ESLint extension and place this in your \`settings.json\` file.

\`\`\`json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
\`\`\`

Now everytime you explicitly save the file (autosaving doesn't count), ESLint will fix as many errors as it can. Tip: if you have syntax errors in the file, you'll need to fix them before your linting errors can be fixed for you.

## Finding all errors in your project

1. Add \`"lint": "eslint client server"\` to the \`scripts\` section of your \`package.json\` file, where \`client\` and \`server\` are folder names (adjust accordingly).
2. Add a \`.eslintignore\` file to the root of your project with these contents: \`bundle.js\` (and any other files/folders you want ESLint to ignore)

Now you simply run \`npm run lint\` to see all of the linting errors in your project.

Pro tip: Run \`npm run lint -- --fix\` to instruct ESLint to fix as many of the errors as it can.
`
}
