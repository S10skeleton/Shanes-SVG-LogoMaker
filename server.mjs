// server.mjs or ensure "type": "module" is in package.json
import fs from 'fs';
import inquirer from 'inquirer';

class Logo {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class SVGGenerator {
  static createSVG(logo) {
    // Implement logic based on logo's shape, color, and text to generate SVG content
    return `<svg width="300" height="200">...</svg>`;
  }
}

async function promptUser() {
  const answers = await inquirer.prompt([
    // Define your questions here
    // Example: { type: 'input', name: 'text', message: 'What text do you want on the logo?' },
  ]);

  const logo = new Logo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  const svgContent = SVGGenerator.createSVG(logo);
  saveSVG(svgContent);
}

function saveSVG(svgContent) {
  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

promptUser(); // Don't forget to call your function!
