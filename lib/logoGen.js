const { writeFile } = require('fs');
const { Circle, Triangle, Square } = require('./shapes');


const logoGen = data => {

    let newShape;

    if(data.shape == 'triangle') {
        newShape = new Triangle(data.shapeColor, data.textColor, data.characters).render();
    } else if(data.shape == 'circle') {
        newShape = new Circle(data.shapeColor, data.textColor, data.characters).render();
    } else {
        newShape = new Square(data.shapeColor, data.textColor, data.characters).render();
    }

    writeFile('./examples/logo.svg', newShape, ()=> console.log('Generated logo.svg in the examples folder!'));
}


module.exports = logoGen;

