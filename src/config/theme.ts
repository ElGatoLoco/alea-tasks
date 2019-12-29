type Color = typeof colors[keyof typeof colors];
type Layout = {
  backgroundColor: Color;
  accentColor: Color;
};
type FontFamily = {
  regular: string;
};
type FontWeight = {
  regular: number;
  bold: number;
};
type FontSize = {
  mini: '14px';
  small: '16px';
  default: '18px';
  big: '20px';
  huge: '26px';
};
type FontColor = {
  default: Color;
  light: Color;
  red: Color;
  grey: Color;
  primary: Color;
};
type Font = {
  family: FontFamily;
  weight: FontWeight;
  size: FontSize;
  color: FontColor;
};

const colors = {
  white: '#ffffff',
  black: '#000',
  primary: '#006C6C',
  darkBlue: '#1E4651',
  lightBlue: '#89C5C5',
  extraLightBlue: '#dff3f4',
  grey: '#B0B0B0',
  greyBlue: '#617C7D',
  greyDarkBlue: '#0D1E22',
  greyLightBlue: '#838E8F',
  tyrkys: '#43CFD4',
  darkTyrkys: '#35B6BB',
  green: '#35BB69',
  lightGreen: '#33de33',
  yellow: '#FFDA00',
  orange: '#FF7831',
  red: '#c71a2f',
} as const;

const layout: Layout = {
  backgroundColor: colors.primary,
  accentColor: colors.white,
};

const font: Font = {
  family: {
    regular: 'Lato, sans-serif',
  },
  weight: {
    regular: 400,
    bold: 700,
  },
  size: {
    mini: '14px',
    small: '16px',
    default: '18px',
    big: '20px',
    huge: '26px',
  },
  color: {
    default: colors.darkBlue,
    light: colors.white,
    red: colors.red,
    grey: colors.greyBlue,
    primary: colors.primary,
  },
};

export default {
  layout,
  font,
};
