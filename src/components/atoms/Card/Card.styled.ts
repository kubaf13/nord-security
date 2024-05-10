import styled from 'styled-components';

export const CardContainer = styled.li`
  width: 325px;
  min-height: 100px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  min-height: 105px;
  display: flex;
  flex-direction: column;
  align-items: self-end;
  margin: 0 25px 0 0;
`;

export const CardTitle = styled.h3`
  font-size: 30px;
  line-height: 1;
  padding-top: 10px;
  font-family: ${({ theme }) => theme.fonts.cairo};
  font-weight: 700;
  //grid-area: city_name;
`;

export const CityLabel = styled.span`
  color: ${({ theme }) => theme.palette.span};
  font-size: 12px;
  line-height: 1;
`;
export const DistanceScore = styled.span`
  font-family: ${({ theme }) => theme.fonts.cairo};
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
`;
export const DistanceLabel = styled.span`
  color: ${({ theme }) => theme.palette.span};
  font-size: 12px;
  line-height: 1;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`;
