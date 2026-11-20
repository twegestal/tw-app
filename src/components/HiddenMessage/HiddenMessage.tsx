import { useEffect, useRef, type ReactNode } from 'react';
import classes from './HiddenMessage.module.css';

type HiddenMessageProps = {
  href: string;
  children: ReactNode;
};

export const HiddenMessage = ({ href, children }: HiddenMessageProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { left, top } = element.getBoundingClientRect();
        element.style.setProperty('--reveal-x', `${clientX - left}px`);
        element.style.setProperty('--reveal-y', `${clientY - top}px`);
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a ref={ref} href={href} className={classes.message}>
      {children}
    </a>
  );
};
