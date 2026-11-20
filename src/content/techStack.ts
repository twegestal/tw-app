import {
  siAngular,
  siDocker,
  siElasticstack,
  siExpress,
  siFlux,
  siHelm,
  siJenkins,
  siKubernetes,
  siLinux,
  siNodedotjs,
  siPostgresql,
  siReact,
  siSonarqubeserver,
  siSpringboot,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { fromSimpleIcon, javaIcon, oracleIcon, type BrandIconData } from './brandIcons';

export type Technology = {
  name: string;
  icon: BrandIconData;
  color: string;
};

export type TechCategory = {
  category: string;
  technologies: Technology[];
};

const brand = (icon: SimpleIcon, color = `#${icon.hex}`) => ({
  icon: fromSimpleIcon(icon),
  color,
});

export const techStack: TechCategory[] = [
  {
    category: 'Backend',
    technologies: [
      { name: 'Java', icon: javaIcon, color: '#f89820' },
      { name: 'Spring Boot', ...brand(siSpringboot) },
      { name: 'Node.js', ...brand(siNodedotjs) },
      { name: 'Express', ...brand(siExpress, '#f4f4f4') },
    ],
  },
  {
    category: 'Frontend',
    technologies: [
      { name: 'TypeScript', ...brand(siTypescript) },
      { name: 'React', ...brand(siReact) },
      { name: 'Angular', ...brand(siAngular, '#dd0031') },
    ],
  },
  {
    category: 'Platform & DevOps',
    technologies: [
      { name: 'Kubernetes', ...brand(siKubernetes) },
      { name: 'Helm', ...brand(siHelm, '#5b6be8') },
      { name: 'FluxCD', ...brand(siFlux) },
      { name: 'Docker', ...brand(siDocker) },
      { name: 'Jenkins', ...brand(siJenkins) },
      { name: 'SonarQube', ...brand(siSonarqubeserver, '#4e9be6') },
      { name: 'Linux', ...brand(siLinux) },
    ],
  },
  {
    category: 'Data & Observability',
    technologies: [
      { name: 'PostgreSQL', ...brand(siPostgresql, '#5b8def') },
      { name: 'Oracle DB', icon: oracleIcon, color: '#e5483a' },
      { name: 'ELK Stack', ...brand(siElasticstack, '#00bfb3') },
    ],
  },
];
