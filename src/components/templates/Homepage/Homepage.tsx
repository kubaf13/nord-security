import { Helmet } from 'react-helmet';

import Link from '../../atoms/Link';
import { Container, Title } from './Homepage.styled';
import type { Homepage as HomepageType } from './Homepage.types';
export const Home: HomepageType = ({ link, text, heading }) => (
  <>
    <Helmet>
      <title>Homepage | Recruitment Task by Jakub Flis</title>
      <meta
        name="description"
        content="Recruitment task focused on API communication and validation skills. Ideal for candidates proficient in integrating and validating diverse APIs with robust error handling and security protocols. Join us to demonstrate your ability to streamline data exchange and enhance system reliability."
      />
    </Helmet>
    <Container>
      <Title>{heading},</Title>
      <p>{text}</p>
      <Link {...link} />
    </Container>
  </>
);
