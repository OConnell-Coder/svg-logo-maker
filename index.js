const {prompt} = require('inquirer');
const {questions, logoGen, shapes} = require('./lib');

prompt(questions).then(logoGen);
