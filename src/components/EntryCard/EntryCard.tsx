import { Badge, Group, Text } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import classes from './EntryCard.module.css';

type EntryCardProps = {
  title: string;
  href: string;
  aside?: string;
  description?: string;
  tags?: string[];
};

export const EntryCard = ({ title, href, aside, description, tags = [] }: EntryCardProps) => (
  <article className={classes.card} data-with-aside={aside ? true : undefined}>
    {aside && <Text className={classes.aside}>{aside}</Text>}
    <div>
      <a href={href} target='_blank' rel='noopener noreferrer' className={classes.title}>
        {title}
        <IconArrowUpRight size={16} stroke={1.75} className={classes.arrow} aria-hidden />
      </a>
      {description && <Text className={classes.description}>{description}</Text>}
      {tags.length > 0 && (
        <Group gap={6} mt='sm'>
          {tags.map((tag) => (
            <Badge key={tag} variant='light' radius='xl' size='sm' tt='none' fw={500}>
              {tag}
            </Badge>
          ))}
        </Group>
      )}
    </div>
  </article>
);
