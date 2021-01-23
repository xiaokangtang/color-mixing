const colors = {
  orange: ['red', 'yellow'],
  grey: ['black', 'white'],
  purple: ['red', 'blue'],
  green: ['yellow', 'blue'],
  brown: ['red', 'green'],
};
const colorsMixedArr = Object.keys(colors);
let colorMixingArr = [];
colorsMixedArr.forEach((key) => {
  colorMixingArr = colorMixingArr.concat(colors[key]);
});
colorMixingArr = Array.from(new Set(colorMixingArr));

const options = {
  colors: colors,
  colorsMixedArr: colorsMixedArr,
  colorMixingArr: colorMixingArr,
  pauseDuration: 2000,
  correctFb: 'green',
  incorrectFb: 'red',
  defaultFb: 'blue',
  correctOutline: '3px solid green',
  incorrectOutline: '3px solid red',
  defaultOutline: '3px dotted blue',
  STATUSES: {
    newSet: 'newSet',
    incomplete: 'incomplete',
    correct: 'correct',
    incorrect: 'incorrect',
    complete: 'complete',
  },
};

export default options;
