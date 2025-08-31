const colors = [
  { hex: '#FF5733', rgb: 'rgb(255, 87, 51)' },
  { hex: '#33FF57', rgb: 'rgb(51, 255, 87)' },
  { hex: '#3357FF', rgb: 'rgb(51, 87, 255)' }
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}


// console.log(colors);
console.log(hexColors);
console.log(rgbColors);
