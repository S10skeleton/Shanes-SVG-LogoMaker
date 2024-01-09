import fs from "fs";
import inquirer from "inquirer";

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
    let shapeSVG = '';

    switch (logo.shape) {
      case 'circle':
        shapeSVG = `<circle cx="150" cy="100" r="80" fill="${logo.shapeColor}" />`;
        break;
      case 'square':
        shapeSVG = `<rect x="50" y="50" width="200" height="200" fill="${logo.shapeColor}" />`;
        break;
      case 'triangle':
        shapeSVG = `<polygon points="150,40 250,160 50,160" fill="${logo.shapeColor}" />`;
        break;
    }

    const textSVG = `<text x="150" y="115" font-family="Verdana" font-size="35" fill="${logo.textColor}" text-anchor="middle">${logo.text}</text>`;

    return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}${textSVG}</svg>`;
  }
}


async function promptUser() {
  const questions = [
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (value) =>
        value.length <= 3 || "Please enter no more than three characters.",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the color for the text (color keyword or hex code):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape for your logo:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter the color for the shape (color keyword or hex code):",
    },
  ];

  const answers = await inquirer.prompt(questions);

  const logo = new Logo(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );
  const svgContent = SVGGenerator.createSVG(logo);
  saveSVG(svgContent);
}

function saveSVG(svgContent) {
  fs.writeFile("logo.svg", svgContent, (err) => {
    if (err) throw err;
    console.log("Generated logo.svg");
  });
}

promptUser();
