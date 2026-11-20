import type { ReactNode } from 'react';
import classes from './EntryList.module.css';

type EntryListProps = {
  children: ReactNode;
};

export const EntryList = ({ children }: EntryListProps) => (
  <ul className={classes.list}>{children}</ul>
);
