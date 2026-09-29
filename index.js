const theme = require('./themes/alamin-one-dark-pro-color-theme.json');

const palette = {
  background: '#282a36',
  foreground: '#abb2bf',
  subtle: '#21222c',
  selection: '#44475a',
  lineHighlight: '#2f3242',
  comment: '#5c6370',
  red: '#e06c75',
  green: '#98c379',
  yellow: '#e5c07b',
  blue: '#61afef',
  purple: '#c678dd',
  cyan: '#56b6c2',
  orange: '#d19a66',
  white: '#ffffff',
  black: '#191a21'
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
