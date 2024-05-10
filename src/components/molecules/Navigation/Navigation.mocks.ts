import { STYLING_VARIANT } from '../../atoms/Button/Button.types';
import type { NavigationProps } from './Navigation.types';

export const navigationMocks: Pick<NavigationProps, 'links'> = {
  links: [
    {
      url: 'https://www.figma.com/file/TqErV4Vd7uwfdUcJlltZcB/Nord-Task?type=design&node-id=0%3A1&mode=design&t=RaGx0MSn7yZqFpq4-1',
      label: 'figma project',
      ariaLabel: 'go to my figma project',
      hasIndex: true,
      isFollow: true,
      openInNewTab: true,
      variant: STYLING_VARIANT.SIMPLE,
    },
    {
      url: 'https://github.com/kubaf13',
      label: 'my github profile',
      ariaLabel: 'go to my github profile',
      hasIndex: true,
      isFollow: true,
      openInNewTab: true,
      variant: STYLING_VARIANT.SIMPLE,
    },
  ],
};
