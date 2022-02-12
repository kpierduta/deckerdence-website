import { createGlobalStyle } from 'styled-components';

const mainBrandColor = '#811112';
const lightShades = 'rgba(255, 255, 255, 0.7)';
const darkAccent = '#3173DC';
const darkShades = '#2c2c2a';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#f7f7f7',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#811112',
  primaryColor: mainBrandColor,
  borderColor: '#f7f7f7',
  backgroundColor: '#FFFFFF',
  backgroundDark: '#3C3C3B',
  backgroundDarkSecondary: '#E9E9E9',
  backgroundLight: '#A95259',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  tealBackground: '#C4C4C4',
  tealGrey: '#ACB3B6',
  fontSize: '20px',
  fontSizeLarge: '24px',
  fontSizeExtraLarge: '30px',
  fontSize2xl: '40px',
  fontFullLarge: '60px',
  textColor: darkShades, // '#2c2c2a',
  textColorInverse: lightShades,
  textColorLite: '#2c2c2a',
  textDark: '#000',
  menuTintColor: darkAccent,
  primaryFontFamily: "'BebasNeuePro-Book',sans-serif",
  secondaryFontFamily: "'BebasNeue-Regular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BebasNeue-Regular ;
    src: url("../fonts/BebasNeue-Regular.otf") format("opentype");
}
  @font-face {
    font-family: BebasNeuePro-Book ;
    src: url("../fonts/BebasNeuePro-Book.ttf") format("truetype");
  }
  @font-face {
    font-family: BebasNeuePro-Book ;
    src: url("../fonts/BebasNeuePro-Book.eot") format("opentype");
  }
  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    font-size: ${theme.fontSize};
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
  }
  .title.is-4 {
    font-size: ${theme.fontSizeLarge} !important;
  }
  .title.is-5 {
    font-size: ${theme.fontSize} !important;
  }

  p {
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
  .subtitle {
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .subtitle.is-4 {
    font-size: ${theme.fontSize} !important;
  }
  .subtitle.is-6 {
    font-size: 14px !important;
  }

  p, .title, .box {
    color: ${theme.textColor};
  }

  .has-background-dark {
    background-color: ${theme.backgroundDark} !important;
  }
  .has-background-danger-dark {
    background-color : ${theme.dangerColor} !important;
  }
  .has-background-teal {
    background-color : ${theme.backgroundDarkSecondary} !important;
  }
  .has-background-grey-teal {
    background-color : ${theme.tealGrey} !important;
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }

  .button.is-danger {
    color: white;
    font-size: 1.5em;
    padding: 0em 1em;
    border-radius: 1px;
    background: #a34442 !important;
  }
  .button.is-normal {
    background: transparent !important;
    border-radius: 0px !important;
    border-color:  ${theme.darkShades};
  }

  .has-text-black {
    color: ${theme.textDark};
  }

  .is-family-primary {
    font-family: ${props => props.theme.primaryFontFamily} !important;
  }
  .is-family-secondary {
    font-family: ${theme.secondaryFontFamily} !important;
  }
`;

export default GlobalStyle;
