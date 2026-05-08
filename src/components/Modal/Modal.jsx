import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';
import { Fragment, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  BookingForm,
  BookingSection,
  BookingTitle,
  CamperDescription,
  CloseButton,
  FormError,
  FormInput,
  FormLabel,
  FormTextarea,
  ModalContainer,
  ModalOverlay,
  ReviewHeader,
  ReviewItem,
  ReviewsList,
  SpecDef,
  SpecGrid,
  SpecTerm,
  SubmitBookingButton,
  Tab,
  TabBar,
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
} from '../CamperCard/CamperCard.styled';
import { FaStar } from 'react-icons/fa';
import { LuFuel, LuMapPin } from 'react-icons/lu';
import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { BsWind } from 'react-icons/bs';
import { formatCamperPrice } from '../../helpers/formatPrice';
import placeholder from '../../helpers/placeholder.jpg';

const emailOk = v =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());

const Modal = () => {
  const {
    isShowModal,
    closeModal,
    selectedCamper: camper,
  } = useGlobalContext();
  const [activeTab, setActiveTab] = useState('features');
  const [form, setForm] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleEsc = ({ code }) => {
      if (code === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  useEffect(() => {
    if (camper) {
      setActiveTab('features');
      setForm({ name: '', email: '', bookingDate: '', comment: '' });
      setErrors({});
    }
  }, [camper?._id]);

  if (!isShowModal || !camper) return null;

  const {
    _id,
    gallery = [],
    name,
    price,
    rating,
    reviews = [],
    location,
    description,
    adults,
    children,
    transmission,
    engine,
    length,
    width,
    height,
    tank,
    consumption,
    form: camperForm,
    details = {},
  } = camper;

  const beds = details.beds ?? 0;
  const kitchen = details.kitchen ?? 0;
  const ac = details.airConditioner ?? details.airconditioner ?? 0;

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!emailOk(form.email)) next.email = 'Enter a valid email';
    if (!form.bookingDate) next.bookingDate = 'Booking date is required';
    return next;
  };

  const handleBookingSubmit = e => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    window.location.reload();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const detailEntries = Object.entries(details).filter(
    ([, v]) => v !== undefined && v !== null && v !== ''
  );

  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalContainer onClick={e => e.stopPropagation()} key={_id}>
        <CloseButton type="button" onClick={closeModal}>
          &times;
        </CloseButton>
        <CamperTitle>{name}</CamperTitle>
        <CamperRatingLocation>
          <RatingContainer>
            <FaStar color="#FFC531" />

            <RatingButton type="button">
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
        <CamperPrice>{formatCamperPrice(price)}</CamperPrice>
        <ImageContainer>
          {(gallery.length > 0 ? gallery.filter(Boolean) : [placeholder]).map(
            (src, i) => (
              <ImageStyle key={i} src={src} alt={`${name} ${i + 1}`} />
            )
          )}
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

          {ac >= 1 && (
            <FeaturesItem>
              <BsWind />
              AC
            </FeaturesItem>
          )}
        </FeatureList>

        <TabBar>
          <Tab
            type="button"
            $active={activeTab === 'features'}
            onClick={() => setActiveTab('features')}
          >
            Features
          </Tab>
          <Tab
            type="button"
            $active={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </Tab>
        </TabBar>

        {activeTab === 'features' && (
          <SpecGrid>
            {children != null && (
              <Fragment key="children-count">
                <SpecTerm>Children</SpecTerm>
                <SpecDef>{children}</SpecDef>
              </Fragment>
            )}
            <SpecTerm>Vehicle type</SpecTerm>
            <SpecDef>{camperForm}</SpecDef>
            <SpecTerm>Length</SpecTerm>
            <SpecDef>{length}</SpecDef>
            <SpecTerm>Width</SpecTerm>
            <SpecDef>{width}</SpecDef>
            <SpecTerm>Height</SpecTerm>
            <SpecDef>{height}</SpecDef>
            <SpecTerm>Tank</SpecTerm>
            <SpecDef>{tank}</SpecDef>
            <SpecTerm>Consumption</SpecTerm>
            <SpecDef>{consumption}</SpecDef>
            {detailEntries.map(([key, val]) => (
              <Fragment key={key}>
                <SpecTerm>{key}</SpecTerm>
                <SpecDef>{String(val)}</SpecDef>
              </Fragment>
            ))}
          </SpecGrid>
        )}

        {activeTab === 'reviews' && (
          <ReviewsList>
            {reviews.length === 0 ? (
              <ReviewItem>No reviews yet.</ReviewItem>
            ) : (
              reviews.map((rev, idx) => (
                <ReviewItem key={idx}>
                  <ReviewHeader>
                    <span>{rev.reviewer_name}</span>
                    <span>
                      <FaStar color="#FFC531" /> {rev.reviewer_rating}
                    </span>
                  </ReviewHeader>
                  <p>{rev.comment}</p>
                </ReviewItem>
              ))
            )}
          </ReviewsList>
        )}

        <BookingSection>
          <BookingTitle>Book this camper</BookingTitle>
          <BookingForm onSubmit={handleBookingSubmit} noValidate>
            <FormLabel>
              Name *
              <FormInput
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name && <FormError>{errors.name}</FormError>}
            </FormLabel>
            <FormLabel>
              Email *
              <FormInput
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && <FormError>{errors.email}</FormError>}
            </FormLabel>
            <FormLabel>
              Booking date *
              <FormInput
                type="date"
                name="bookingDate"
                value={form.bookingDate}
                onChange={handleChange}
              />
              {errors.bookingDate && (
                <FormError>{errors.bookingDate}</FormError>
              )}
            </FormLabel>
            <FormLabel>
              Comment
              <FormTextarea
                name="comment"
                value={form.comment}
                onChange={handleChange}
                rows={4}
              />
            </FormLabel>
            <SubmitBookingButton type="submit">Send booking</SubmitBookingButton>
          </BookingForm>
        </BookingSection>
      </ModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
