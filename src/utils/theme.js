import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const mainBrandColor = '#811112';
const lightShades = 'rgba(255, 255, 255, 0.7)';
const darkAccent = '#3173DC';
const darkShades = '#0A0A0A';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#f7f7f7',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#2c2c2a',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Arial Narrow,Arial',sans-serif",
  secondaryFontFamily: "'BebasNeueRegular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    font-size: 17px;
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
    letter-spacing: 1px;
  }
  .subtitle{
    font-family: ${props => props.theme.primaryFontFamily};
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor};
  }
  .button.is-primary {
   
  }
  .button.is-secondary {
   
  }
  .button.is-primary{
    background: transparent;
    font-family: ${theme.secondaryFontFamily} !important;
    border-color:#363636;
    border-width: 2.5px;
    padding-left: 2rem;
    padding-right: 2rem;
    color: black;
    :hover{
      color: black;
      background: transparent;
      border-width: 4px;
      border-color:#363636;
    }
  }
  .button.is-danger{
    color: white;
    font-size: 1.5em;
    padding: 0em 1em;
    border-radius: 3px;
    background: #a34442 !important;
  }
  .has-text-warning {
    color: ${theme.mainBrandColor} !important;
  }
  .button.is-normal {
    background: transparent !important;
    border-radius: 0px !important;
    border-color:  ${theme.darkShades};
  }
`;

export default GlobalStyle;
