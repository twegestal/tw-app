import { Title } from '@mantine/core';
import type { ReactNode } from 'react';
import { sectionLabels, type SectionId } from '../../content/sections';
import classes from './Section.module.css';

type SectionProps = {
  id: SectionId;
  title?: ReactNode;
  children: ReactNode;
};

export const Section = ({ id, title = sectionLabels[id], children }: SectionProps) => {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={classes.section}>
      <Title order={2} id={headingId} className={classes.title}>
        {title}
      </Title>
      {children}
    </section>
  );
};
