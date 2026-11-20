import { Text, Title } from '@mantine/core';
import { HiddenMessage } from '../../components/HiddenMessage/HiddenMessage';
import { ScrollCue } from '../../components/ScrollCue/ScrollCue';
import { emailHref, profile } from '../../content/profile';
import classes from './Hero.module.css';

export const Hero = () => (
  <header id='top' className={classes.hero}>
    <div className={classes.intro}>
      <Title order={1} className={classes.name}>
        {profile.name}
      </Title>
      <Text className={classes.role}>{profile.role}</Text>
    </div>
    <div className={classes.secret}>
      <HiddenMessage href={emailHref}>Psst, you found it. Let’s talk →</HiddenMessage>
    </div>
    <div className={classes.cue}>
      <ScrollCue href='#about' label='Learn more' direction='down' />
    </div>
  </header>
);
