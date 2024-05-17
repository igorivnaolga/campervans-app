import {
  CamperDescription,
  CamperNamePrice,
  CamperPrice,
  CamperRatingLocation,
  CamperTitle,
  FavButton,
  FeatureList,
  FeaturesItem,
  ImageContainer,
  ImageStyle,
  InfoContainer,
  ItemStyle,
  ListStyle,
  LocationContainer,
  PriceFavContainer,
  RatingButton,
  RatingContainer,
  ShowMoreButton,
} from './CampersList.styled';

import { LuFuel, LuMapPin } from 'react-icons/lu';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { BsWind } from 'react-icons/bs';

import placeholder from '../../helpers/placeholder.jpg';

export const CampersList = ({ campers }) => {
  console.log(campers);
  return (
    <div>
      <ListStyle>
        {campers.map(
          ({
            _id,
            gallery,
            name,
            price,
            rating,
            reviews,
            location,
            description,
            adults,
            transmission,
            engine,
            details: { beds, kitchen, airconditioner },
          }) => (
            <ItemStyle key={_id}>
              <ImageContainer>
                <ImageStyle
                  src={gallery.length > 0 ? gallery[0] : placeholder}
                  alt={name}
                />
              </ImageContainer>
              <InfoContainer>
                <CamperNamePrice>
                  <CamperTitle>{name}</CamperTitle>

                  <PriceFavContainer>
                    <CamperPrice>€{price.toFixed(2)}</CamperPrice>
                    <FavButton type="button" aria-label="Add to favorites">
                      <FaRegHeart size="20px" />
                    </FavButton>
                  </PriceFavContainer>
                </CamperNamePrice>
                <CamperRatingLocation>
                  <RatingContainer>
                    <FaStar color="#FFC531" />

                    <RatingButton>
                      {`${rating}(${reviews.length} Reviews)`}
                    </RatingButton>
                  </RatingContainer>
                  <LocationContainer>
                    <p>
                      <LuMapPin />
                      {location}
                    </p>
                  </LocationContainer>
                </CamperRatingLocation>
                <CamperDescription>{description}</CamperDescription>
                <FeatureList>
                  <FeaturesItem>
                    <IoPeopleOutline />
                    {adults} adults
                  </FeaturesItem>
                  <FeaturesItem>
                    <TbAutomaticGearbox />
                    {transmission}
                  </FeaturesItem>
                  <FeaturesItem>
                    <LuFuel />
                    {engine}
                  </FeaturesItem>

                  {kitchen >= 1 && (
                    <FeaturesItem>
                      <TbToolsKitchen2 />
                      Kitchen
                    </FeaturesItem>
                  )}

                  <FeaturesItem>
                    <IoBedOutline />
                    {beds} beds
                  </FeaturesItem>

                  {airconditioner >= 1 && (
                    <FeaturesItem>
                      <BsWind />
                      AC
                    </FeaturesItem>
                  )}
                </FeatureList>
                <ShowMoreButton>Show more</ShowMoreButton>
              </InfoContainer>
            </ItemStyle>
          )
        )}
      </ListStyle>
    </div>
  );
};
