import { useEffect, useState } from 'react';

const activationLine = 0.35;

const isScrolledToBottom = () =>
  window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

const hasReachedActivationLine = (id: string) => {
  const top = document.getElementById(id)?.getBoundingClientRect().top;
  return top !== undefined && top <= window.innerHeight * activationLine;
};

export const useActiveSection = <T extends string>(ids: readonly T[]) => {
  const [activeId, setActiveId] = useState<T | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateActiveId = () => {
      const reachedIds = isScrolledToBottom() ? ids : ids.filter(hasReachedActivationLine);
      setActiveId(reachedIds.at(-1) ?? null);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveId);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  return activeId;
};
