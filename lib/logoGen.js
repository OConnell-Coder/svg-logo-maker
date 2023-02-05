const { writeFile } = require('fs');

const logoGen = data => {

    let output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${data.shape == 'triangle' ? 
        `<polygon points="160,10 290,200 10,200" style="fill:${data.shapeColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>` :
    
    data.shape == 'circle' ? 
        `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>` :

    `<rect width="200" height="200" fill="${data.shapeColor}" />
    <text x="100" y="115" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>`}

    </svg>`

    writeFile('./examples/logo.svg', output, ()=> console.log('Generated logo.svg in the examples folder!'));

}

module.exports = logoGen;

