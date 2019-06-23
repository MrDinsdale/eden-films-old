const breakpoints = ['40em', '52em', '64em', '80em'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const colors = {
  black: '#000',
  white: '#fff',
  greyDark: '#111',
  greyMid: '#787878',
  greyLight: '#b6acac',
  orange: '#ffbd4a',
  cream: '#f3f0ee',
};

export default {
  breakpoints,
  colors,
  height: {
    input: '40px',
  },
  radius: {
    xs: '4px',
  },
  spacing: 4,
};
