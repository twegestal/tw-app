import { IconBrandGithub, IconBrandLinkedin, IconMail, type Icon } from '@tabler/icons-react';

export type SocialLink = {
  label: string;
  href: string;
  icon: Icon;
};

export const profile = {
  name: 'Teodor Wegestål',
  role: 'Software Developer',
  email: 't.wegestal@gmail.com',
  tagline:
    'Fullstack developer building Java and TypeScript backends, modern frontends and Kubernetes platforms.',
  employer: {
    name: 'Netcompany',
    url: 'https://netcompany.com/',
  },
};

export const emailHref = `mailto:${profile.email}`;

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/twegestal/', icon: IconBrandGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/teodor-wegest%C3%A5l-80bb74274/',
    icon: IconBrandLinkedin,
  },
  { label: 'Email', href: emailHref, icon: IconMail },
];
