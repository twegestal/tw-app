export type Project = {
  name: string;
  url: string;
  description: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    name: 'D&D Spellbook',
    url: 'https://dndspellbook.com',
    description:
      'A mobile-first web app I built for my tabletop group, so we can keep track of our spells while playing Dungeons & Dragons.',
  },
];
