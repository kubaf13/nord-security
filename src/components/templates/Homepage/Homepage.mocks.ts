import { STYLING_VARIANT } from '../../atoms/Button/Button.types';
import type { HomepageProps } from './Homepage.types';

export const homepageMocks: HomepageProps = {
  heading: 'Hello',
  text: 'welcome to my app',
  link: {
    variant: STYLING_VARIANT.BUTTON,
    ariaLabel: 'go to login page',
    label: 'log in',
    url: '/login',
  },
};
