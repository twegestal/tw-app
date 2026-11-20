import { EntryCard } from '../../components/EntryCard/EntryCard';
import { EntryList } from '../../components/EntryCard/EntryList';
import { Section } from '../../components/Section/Section';
import { experience } from '../../content/experience';

export const Experience = () => (
  <Section id='experience'>
    <EntryList>
      {experience.map(({ period, role, organization, description, tags }) => (
        <li key={`${organization.name}-${role}`}>
          <EntryCard
            aside={period}
            title={`${role} · ${organization.name}`}
            href={organization.url}
            description={description}
            tags={tags}
          />
        </li>
      ))}
    </EntryList>
  </Section>
);
