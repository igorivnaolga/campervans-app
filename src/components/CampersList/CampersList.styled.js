import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 15px;
`;

export const ItemStyle = styled.li`
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }

  display: flex;
  gap: 24px;
  padding: 24px;
  width: 100%;
  max-width: 888px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background-color: #fff;
  box-shadow: rgba(239, 241, 243, 0.3) 0px 1px 2px 0px,
    rgba(225, 229, 232, 0.15) 0px 1px 3px 1px;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageStyle = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  align-self: flex-start;
`;

export const InfoContainer = styled.div`
  min-width: 375px;
`;

export const CamperNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceFavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const CamperPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const FavButton = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
  fill: #fff;
  stroke: black;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: #e44848;
    stroke: #e44848;
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CamperTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CamperRatingLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RatingButton = styled.button`
  text-decoration: underline;
  cursor: pointer;
  border: none;
  padding: 0px;
  background-color: transparent;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CamperDescription = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 24px;
`;

export const FeatureList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FeaturesItem = styled.li`
  border-radius: 100px;
  background: #f2f4f7;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: #e44848;
  font-size: 16px;
  max-width: 166px;
  min-height: 56px;
  color: #fff;
  border: none;

  &:hover,
  &:focus {
    background: #d84343;
  }
`;
