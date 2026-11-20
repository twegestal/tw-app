import { EntryCard } from '../../components/EntryCard/EntryCard';
import { EntryList } from '../../components/EntryCard/EntryList';
import { Section } from '../../components/Section/Section';
import { projects } from '../../content/projects';

export const Projects = () => (
  <Section id='projects'>
    <EntryList>
      {projects.map(({ name, url, description, tags }) => (
        <li key={name}>
          <EntryCard title={name} href={url} description={description} tags={tags} />
        </li>
      ))}
    </EntryList>
  </Section>
);
