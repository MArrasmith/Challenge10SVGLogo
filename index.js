const inquirer = require('inquirer');
const fs = require('fs');


const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like to appear on your logo? (enter up to three characters)'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would your like the text to appear as on your logo? (enter color keyword or hexidecimal number)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be?',
            choices:
                [
                    'Triangle',
                    'Square',
                    'Circle'
                ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be? (enter color keyword or hexidecimal number)'
        }
    ]);
};

userPrompts();