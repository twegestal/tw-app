import { sectionIds, sectionLabels } from '../../content/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import classes from './SectionNav.module.css';

export const SectionNav = () => {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav aria-label='Sections' className={classes.nav}>
      <ul className={classes.list}>
        {sectionIds.map((id) => {
          const isActive = id === activeId;

          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={classes.link}
                data-active={isActive || undefined}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className={classes.indicator} />
                {sectionLabels[id]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
