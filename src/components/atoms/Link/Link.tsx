import { StyledLink } from './Link.styled';
import type { Link as LinkType } from './Link.types';

export const Link: LinkType = ({
  label,
  ariaLabel,
  url,
  openInNewTab,
  hasIndex,
  isFollow,
  variant,
}) => {
  const newTab = openInNewTab ? '_blank' : undefined;
  const followValue = isFollow ? 'follow' : 'nofollow';
  const indexValue = hasIndex ? 'index' : 'noindex';

  return (
    <StyledLink
      href={url}
      target={newTab}
      rel={`${indexValue} ${followValue}`}
      aria-label={ariaLabel}
      variant={variant}
    >
      {label}
    </StyledLink>
  );
};
