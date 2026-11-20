import { Anchor, Text } from '@mantine/core';
import { Section } from '../../components/Section/Section';
import { profile } from '../../content/profile';

export const About = () => (
  <Section id='about'>
    <Text size='lg' lh={1.8}>
      Hi, I’m Teodor. I’m a developer at{' '}
      <Anchor
        href={profile.employer.url}
        target='_blank'
        rel='noopener noreferrer'
        inherit
        fw={500}
      >
        {profile.employer.name}
      </Anchor>
      , working on large public sector systems in Denmark. Most days I move between Spring Boot and
      Node services, Angular and React frontends, and the Kubernetes setup that runs it all.
    </Text>
  </Section>
);
