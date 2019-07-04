const layout = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

const colors = {
  black: '#090909',
  white: '#fff',
  greyDark: '#111',
  greyMid: '#787878',
  greyLight: '#b6acac',
  orange: '#ffbd4a',
  cream: '#f3f0ee',
};

const typography = {
  fonts: {
    body: '"Open Sans Condensed", sans-serif',
    heading: '"Six Caps", sans-serif',
  },
  fontSizes: [10, 16, 20, 32, 48, 64, 128],
  letterSpacings: ['-0.2px', '0.8px', '1px', '1.2px', '1.5px', '2px'],
};

const buttons = {
  primary: {
    color: '#fff',
    backgroundColor: colors.cream,
  },
};

export default {
  ...layout,
  colors,
  ...typography,
  buttons,
};
