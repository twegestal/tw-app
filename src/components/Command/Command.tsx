import classes from './Command.module.css';

type CommandProps = {
  children: string;
};

export const Command = ({ children }: CommandProps) => (
  <span className={classes.command}>
    <span className={classes.prompt} aria-hidden>
      $
    </span>
    {children}
    <span className={classes.cursor} aria-hidden />
  </span>
);
