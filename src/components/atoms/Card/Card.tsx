import imageSrc from '../../../static/images/card-asset.jpg';
import {
  CardContainer,
  CardTitle,
  CityLabel,
  Content,
  DistanceLabel,
  DistanceScore,
  ImageWrapper,
} from './Card.styled';
import type { Card as CardType } from './Card.types';

export const Card: CardType = ({ name, distance }) => (
  <CardContainer>
    <ImageWrapper>
      <img src={imageSrc} alt="city by night" />
    </ImageWrapper>
    <Content>
      <CardTitle>{name}</CardTitle>
      <CityLabel>name</CityLabel>
      <DistanceScore>{distance}</DistanceScore>
      <DistanceLabel>distance</DistanceLabel>
    </Content>
  </CardContainer>
);
