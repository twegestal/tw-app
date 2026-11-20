import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { socialLinks } from '../content/profile';

const isExternal = (href: string) => href.startsWith('http');

export const SocialLinks = () => (
  <Group gap='xs'>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <Tooltip key={label} label={label} withArrow>
        <ActionIcon
          component='a'
          href={href}
          aria-label={label}
          variant='subtle'
          color='gray'
          size={48}
          radius='xl'
          {...(isExternal(href) && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          <Icon size={26} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    ))}
  </Group>
);
