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
  dangerColor: '#811112',
  primaryColor: mainBrandColor,
  borderColor: '#f7f7f7',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 17,
  fontSizeExtraSmall: 12,
  fontSizeSmall: 14,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#2c2c2a',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Arial Narrow,Arial',sans-serif",
  secondaryFontFamily: "'BebasNeue-Regular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
  font-family: BebasNeue-Regular ;
  src: url("../fonts/BebasNeue-Regular.otf") format("opentype");
}

  body {
    letter-spacing: 0.03rem !important;
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    font-size: 17px;
  }
  .title {
    font-family: ${theme.secondaryFontFamily};
    line-height: 2.25rem !important;
    letter-spacing: 2px !important;
  }
  .title.is-4 {
    font-size: 22px !important;
  }
  .title.is-5{
    font-size: 18px !important;
  }
  .title.is-6 {
    font-size: 14px !important;
  }
  .subtitle{
    font-family: ${props => props.theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem !important;
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p, .title, .box {
    color: ${theme.textColor};
  }
  .button.is-danger{
    color: white;
    font-size: 1.5em;
    padding: 0em 1em;
    border-radius: 3px;
    background: #a34442 !important;
  }
  .button.is-normal {
    background: transparent !important;
    border-radius: 0px !important;
    border-color:  ${theme.darkShades};
  }
  .has-text-warning {
    color: ${theme.mainBrandColor} !important;
  }
  .has-text-black {
    color: ${theme.textColorLite} !important;
  }
  .columns {
    margin-right:0rem !important;
  }
`;

export default GlobalStyle;
