import { useEffect } from 'react';
import classes from './Spotlight.module.css';

export const Spotlight = () => {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--spotlight-x', `${clientX}px`);
        root.style.setProperty('--spotlight-y', `${clientY}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div aria-hidden className={classes.spotlight} />;
};
