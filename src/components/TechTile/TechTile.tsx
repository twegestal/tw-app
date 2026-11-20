import { Box } from '@mantine/core';
import type { Technology } from '../../content/techStack';
import { BrandIcon } from '../BrandIcon';
import classes from './TechTile.module.css';

type TechTileProps = {
  technology: Technology;
};

export const TechTile = ({ technology: { name, icon, color } }: TechTileProps) => (
  <Box className={classes.tile} __vars={{ '--tech-color': color }}>
    <BrandIcon icon={icon} className={classes.icon} />
    <span className={classes.name}>{name}</span>
  </Box>
);
