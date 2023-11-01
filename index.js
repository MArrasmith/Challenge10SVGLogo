const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');



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
            logoShape = new Triangle();
        } else if (answers.shop === 'Circle') {
            logoShape = new Circle();
        } else (answers.shape === 'Square'); {
            logoShape = new Square();
        }
    shape.setColor(answers.shapeColor)
    const fileContent = shape.render()
    fs.writeFile('logo.svg', fileContent)
})
    console.log(answers)
}
// Function call to initialize app
init();
