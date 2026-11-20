import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import classes from './ScrollCue.module.css';

type ScrollCueProps = {
  href: string;
  label: string;
  direction: 'up' | 'down';
};

export const ScrollCue = ({ href, label, direction }: ScrollCueProps) => {
  const Chevron = direction === 'down' ? IconChevronDown : IconChevronUp;

  return (
    <a href={href} className={classes.cue} data-direction={direction}>
      <span className={classes.label}>{label}</span>
      <Chevron className={classes.icon} size={44} stroke={1.25} aria-hidden />
    </a>
  );
};
