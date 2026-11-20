import type { BrandIconData } from '../content/brandIcons';

type BrandIconProps = {
  icon: BrandIconData;
  className?: string;
};

export const BrandIcon = ({ icon, className }: BrandIconProps) => (
  <svg
    viewBox={icon.viewBox}
    className={className}
    fill='currentColor'
    aria-hidden
    focusable='false'
  >
    <path d={icon.path} />
  </svg>
);
