export interface Palette {
  background: string;
  foreground: string;
  subtle: string;
  selection: string;
  lineHighlight: string;
  comment: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  cyan: string;
  orange: string;
  white: string;
  black: string;
}

export interface ThemeDefinition {
  name: string;
  type: string;
  colors: Record<string, string>;
  tokenColors: Array<{
    name?: string;
    scope: string | string[];
    settings: {
      foreground?: string;
      fontStyle?: string;
    };
  }>;
}

export const palette: Palette;
export const theme: ThemeDefinition;
export default theme;
