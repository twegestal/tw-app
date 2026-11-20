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
  {
    name: 'Homelab GitOps',
    url: 'https://github.com/twegestal/homelab-gitops',
    description:
      'A local Kubernetes cluster managed entirely through GitOps. Flux keeps the cluster in sync with the repo, so every change is a commit. Monitoring, secrets management and CI are next on the list.',
    tags: ['Kubernetes', 'k3s', 'FluxCD', 'Helm', 'Traefik'],
  },
];
