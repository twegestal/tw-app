import { Anchor, Text } from '@mantine/core';
import { SectionNav } from '../../components/SectionNav/SectionNav';
import { SocialLinks } from '../../components/SocialLinks';
import { profile } from '../../content/profile';
import classes from './Sidebar.module.css';

export const Sidebar = () => (
  <div className={classes.sidebar}>
    <div>
      <Text className={classes.name}>{profile.name}</Text>
      <Text className={classes.role}>
        {profile.role} at{' '}
        <Anchor href={profile.employer.url} target='_blank' rel='noopener noreferrer' inherit>
          {profile.employer.name}
        </Anchor>
      </Text>
      <Text className={classes.tagline}>{profile.tagline}</Text>
      <SectionNav />
    </div>
    <SocialLinks />
  </div>
);
