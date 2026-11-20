import { createTheme, type CSSVariablesResolver, type MantineColorsTuple } from '@mantine/core';

const fontFamily = "'Inter Variable', system-ui, -apple-system, 'Segoe UI', sans-serif";

const accent: MantineColorsTuple = [
  '#e2fbfb',
  '#cff5f5',
  '#a3eaeb',
  '#74dfe0',
  '#56d3d6',
  '#3fcacd',
  '#30c5c8',
  '#1fafb1',
  '#0c9c9e',
  '#008788',
];

export const theme = createTheme({
  primaryColor: 'accent',
  primaryShade: 4,
  colors: { accent },
  fontFamily,
  headings: { fontFamily, fontWeight: '600' },
  defaultRadius: 'md',
});

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    '--tw-accent': accent[4],
    '--tw-heading': '#f4f4f4',
    '--tw-surface': 'rgb(148 163 184 / 0.05)',
    '--tw-border': 'rgb(148 163 184 / 0.12)',
  },
  light: {},
  dark: {
    '--mantine-color-body': '#0e172a',
    '--mantine-color-text': '#c9d1d9',
    '--mantine-color-dimmed': '#8b98a9',
  },
});
