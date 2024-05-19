import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  CamperDescription,
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from './Modal.styled';
import {
  CamperPrice,
  CamperRatingLocation,
  CamperTitle,
  FeatureList,
  FeaturesItem,
  ImageContainer,
  ImageStyle,
  LocationContainer,
  RatingButton,
  RatingContainer,
} from '../../components/CamperCard/CamperCard.styled';
import { FaStar } from 'react-icons/fa';
import { LuFuel, LuMapPin } from 'react-icons/lu';
import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { BsWind } from 'react-icons/bs';

const Modal = () => {
  const {
    isShowModal,
    toggleModal: closeModal,
    selectedCamper: camper,
  } = useGlobalContext();

  useEffect(() => {
    const handleEsc = ({ code }) => {
      if (code === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  if (!isShowModal || !camper) return null;

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
    details: { beds, kitchen, airconditioner },
  } = camper;
  return createPortal(
    <ModalOverlay>
      <ModalContainer key={_id}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <CamperTitle>{name}</CamperTitle>
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
        <CamperPrice>€{price.toFixed(2)}</CamperPrice>
        <ImageContainer>
          <ImageStyle src={gallery[0]} alt={name} />
          <ImageStyle src={gallery[1]} alt={name} />
          <ImageStyle src={gallery[2]} alt={name} />
        </ImageContainer>

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
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
