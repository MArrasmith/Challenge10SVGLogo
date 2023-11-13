const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { Triangle, Circle, Square, Shape } = require('./lib/shapes');



const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'textContent',
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



// TODO: Create a function to initialize app
const init = () => {
    //prompt the user for info
    userPrompts()
        //writeFile with fs
        .then(answers => {
            let logoShape;
            if (answers.shape === 'Triangle') {
                logoShape = new Triangle(answers.shapeColor, answers.textColor, answers.textContent);
            } else if (answers.shape === 'Circle') {
                logoShape = new Circle(answers.shapeColor, answers.textColor, answers.textContent);
            } else if (answers.shape === 'Square') {
                logoShape = new Square(answers.shapeColor, answers.textColor, answers.textContent);
            }
            const fileContent = logoShape.render()
            writeFile('logo.svg', fileContent)
        })
}
// Function call to initialize app
init();
