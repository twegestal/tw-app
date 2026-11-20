import { Container } from '@mantine/core';
import classes from './App.module.css';
import { ScrollCue } from './components/ScrollCue/ScrollCue';
import { Spotlight } from './components/Spotlight/Spotlight';
import { About } from './sections/About/About';
import { Experience } from './sections/Experience/Experience';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { Sidebar } from './sections/Sidebar/Sidebar';
import { TechStack } from './sections/TechStack/TechStack';

export const App = () => (
  <>
    <Spotlight />
    <Hero />
    <Container size='lg' className={classes.layout}>
      <Sidebar />
      <main className={classes.content}>
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <footer className={classes.footer}>
          <ScrollCue href='#top' label='Back to top' direction='up' />
        </footer>
      </main>
    </Container>
  </>
);
