const { SVGGenerator } = require('./SVGGenerator');

describe('SVGGenerator', () => {
  it('creates correct SVG for a circle logo', () => {
    const logo = { text: 'ABC', textColor: '#FFFFFF', shape: 'circle', shapeColor: '#000000' };
    const svg = SVGGenerator.createSVG(logo);
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="#000000"');
    expect(svg).toContain('ABC');
  });

//   add more tests if needed 
});
