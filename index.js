const {prompt} = require('inquirer');
const {questions, logoGen} = require('./lib');

prompt(questions).then(logoGen);
