const { writeFile } = require('fs');

const logoGen = data => {

    let output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${data.shape == 'triangle' ? 
        `<polygon points="210,10 410,310 10,310" style="fill:${data.shapeColor};stroke:purple;stroke-width:1" />
        <text x="210" y="240" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>` :
    
    data.shape == 'circle' ? 
        `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>` :

    `<rect width="200" height="200" style="fill="${data.shapeColor}";stroke-width:3;stroke:rgb(0,0,0)" />
    <text x="210" y="240" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>`}

    </svg>`

    writeFile('./logo.svg', output, ()=> console.log('Generated logo.svg!'));

}

module.exports = logoGen;

