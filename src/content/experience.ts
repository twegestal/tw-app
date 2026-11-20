export type Experience = {
  period: string;
  role: string;
  organization: {
    name: string;
    url: string;
  };
  description?: string;
  tags?: string[];
};

export const experience: Experience[] = [
  {
    period: '2024 — Now',
    role: 'Software Developer',
    organization: { name: 'Netcompany', url: 'https://netcompany.com/' },
    description:
      'Building and running large public sector systems in Denmark, from backend services and frontends to the Kubernetes platform they run on.',
    tags: [
      'Java',
      'Spring Boot',
      'TypeScript',
      'Node.js',
      'Angular',
      'React',
      'Kubernetes',
      'Helm',
    ],
  },
  {
    period: 'Sep — Nov 2024',
    role: 'Intern',
    organization: { name: 'Devoteam', url: 'https://www.devoteam.com/' },
  },
  {
    period: '2021 — 2024',
    role: 'BSc, Systems Development',
    organization: { name: 'Malmö University', url: 'https://mau.se/en/' },
  },
];
