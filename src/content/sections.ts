export const sectionLabels = {
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  'tech-stack': 'Tech stack',
} as const;

export type SectionId = keyof typeof sectionLabels;

export const sectionIds = Object.keys(sectionLabels) as SectionId[];
