import { Stack, Title } from '@mantine/core';
import { Command } from '../../components/Command/Command';
import { Section } from '../../components/Section/Section';
import { TechTile } from '../../components/TechTile/TechTile';
import { techStack } from '../../content/techStack';
import classes from './TechStack.module.css';

export const TechStack = () => (
  <Section id='tech-stack' title={<Command>kubectl get stack</Command>}>
    <Stack gap='xl'>
      {techStack.map(({ category, technologies }) => (
        <div key={category}>
          <Title order={3} className={classes.category}>
            {category}
          </Title>
          <ul className={classes.grid}>
            {technologies.map((technology) => (
              <li key={technology.name}>
                <TechTile technology={technology} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Stack>
  </Section>
);
