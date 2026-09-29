const theme = require('./themes/alamin-one-dark-pro-color-theme.json');

const palette = {
  background: '#282c34',
  foreground: '#abb2bf',
  subtle: '#21252b',
  selection: '#3e4451',
  lineHighlight: '#2c313a',
  comment: '#5c6370',
  red: '#e06c75',
  green: '#98c379',
  yellow: '#e5c07b',
  blue: '#61afef',
  purple: '#c678dd',
  cyan: '#56b6c2',
  orange: '#d19a66',
  white: '#ffffff',
  black: '#181a1f'
};

function activate(context) {}
function deactivate() {}

module.exports = {
  activate,
  deactivate,
  theme,
  palette,
  default: theme
};
