import {
  CamperDescription,
  CamperNamePrice,
  CamperPrice,
  CamperRatingLocation,
  CamperTitle,
  FeatureList,
  FeaturesItem,
  ImageStyle,
  InfoContainer,
  ItemStyle,
  LocationContainer,
  PhotoButton,
  PriceFavContainer,
  RatingButton,
  RatingContainer,
  ShowMoreButton,
} from '../CamperCard/CamperCard.styled';

import { LuFuel, LuMapPin } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { BsWind } from 'react-icons/bs';

import placeholder from '../../helpers/placeholder.jpg';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import { useGlobalContext } from '../../context/GlobalProvider/GlobalProvider';
import { formatCamperPrice } from '../../helpers/formatPrice';

const CamperCard = ({ camper }) => {
  const {
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
    details = {},
  } = camper;

  const beds = details.beds ?? 0;
  const kitchen = details.kitchen ?? 0;
  const ac = details.airConditioner ?? details.airconditioner ?? 0;

  const { openModal } = useGlobalContext();

  return (
    <ItemStyle key={_id}>
      <PhotoButton
        type="button"
        onClick={() => openModal(camper)}
        aria-label={`Open details for ${name}`}
      >
        <ImageStyle
          src={gallery.length > 0 ? gallery[0] : placeholder}
          alt=""
        />
      </PhotoButton>
      <InfoContainer>
        <CamperNamePrice>
          <CamperTitle>{name}</CamperTitle>

          <PriceFavContainer>
            <CamperPrice>{formatCamperPrice(price)}</CamperPrice>
            <FavoriteButton
              camper={camper}
              type="button"
              aria-label="Add to favorites"
            ></FavoriteButton>
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

          {ac >= 1 && (
            <FeaturesItem>
              <BsWind />
              AC
            </FeaturesItem>
          )}
        </FeatureList>
        <ShowMoreButton onClick={() => openModal(camper)}>
          Show more
        </ShowMoreButton>
      </InfoContainer>
    </ItemStyle>
  );
};
export default CamperCard;
