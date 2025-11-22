export const subjectColors = {
  economics: {
    primary: '#10B981', // Green
    light: '#D1FAE5',
    dark: '#047857',
  },
  'political-science': {
    primary: '#8B5CF6', // Purple
    light: '#EDE9FE',
    dark: '#5B21B6',
  },
  history: {
    primary: '#F59E0B', // Orange
    light: '#FEF3C7',
    dark: '#B45309',
  },
  upsc: {
    primary: '#EF4444', // Red
    light: '#FEE2E2',
    dark: '#B91C1C',
  },
};

export type SubjectTheme = keyof typeof subjectColors;
