import { useGlobalContext } from 'context/GlobalProvider/GlobalProvider';
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  BookingForm,
  BookingSection,
  BookingTitle,
  CloseButton,
  DescriptionText,
  FormError,
  FormInput,
  FormLabel,
  FormTextarea,
  GalleryImg,
  GalleryRow,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  PriceRow,
  RatingMeta,
  ReadMoreButton,
  ReviewHeader,
  ReviewItem,
  ReviewsList,
  SpecDef,
  SpecGrid,
  SpecTerm,
  SubmitBookingButton,
  Tab,
  TabBar,
  TabPanel,
} from './Modal.styled';
import {
  CamperPrice,
  CamperRatingLocation,
  CamperTitle,
  FeatureList,
  FeaturesItem,
  LocationContainer,
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

function formatSpecLabel(key) {
  const spaced = String(key)
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .trim();
  if (!spaced) return key;
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

const Modal = () => {
  const {
    isShowModal,
    closeModal,
    selectedCamper: camper,
  } = useGlobalContext();
  const camperId = camper?._id;
  const closeBtnRef = useRef(null);
  const descRef = useRef(null);
  const [activeTab, setActiveTab] = useState('features');
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [hasMoreDescription, setHasMoreDescription] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const dialogTitleId =
    camperId != null ? `camper-modal-title-${camperId}` : 'camper-modal-title';
  const tabFeaturesId =
    camperId != null ? `modal-tab-features-${camperId}` : 'modal-tab-features';
  const tabReviewsId =
    camperId != null ? `modal-tab-reviews-${camperId}` : 'modal-tab-reviews';
  const panelFeaturesId =
    camperId != null ? `modal-panel-features-${camperId}` : 'modal-panel-features';
  const panelReviewsId =
    camperId != null ? `modal-panel-reviews-${camperId}` : 'modal-panel-reviews';

  const descriptionText = camper?.description ?? '';

  useLayoutEffect(() => {
    if (!isShowModal || camperId == null) return undefined;
    if (!descriptionText.trim()) {
      setHasMoreDescription(false);
      return undefined;
    }
    if (descriptionExpanded) {
      setHasMoreDescription(true);
      return undefined;
    }
    let cancelled = false;
    const outer = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (cancelled) return;
        const node = descRef.current;
        if (!node) return;
        setHasMoreDescription(node.scrollHeight > node.clientHeight + 1);
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(outer);
    };
  }, [isShowModal, camperId, descriptionText, descriptionExpanded]);

  useEffect(() => {
    const handleEsc = ({ code }) => {
      if (code === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  useEffect(() => {
    if (!isShowModal || camperId == null) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frame = requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = prevOverflow;
    };
  }, [isShowModal, camperId]);

  useEffect(() => {
    if (camperId == null) return;
    setActiveTab('features');
    setDescriptionExpanded(false);
    setForm({ name: '', email: '', bookingDate: '', comment: '' });
    setErrors({});
  }, [camperId]);

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

  const gallerySrc = gallery.length > 0 ? gallery.filter(Boolean) : [placeholder];

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer
        key={_id}
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitleId}
        tabIndex={-1}
      >
        <CloseButton
          ref={closeBtnRef}
          type="button"
          onClick={closeModal}
          aria-label="Close camper details"
        >
          ×
        </CloseButton>
        <ModalHeader>
          <CamperTitle id={dialogTitleId}>{name}</CamperTitle>
        </ModalHeader>
        <CamperRatingLocation>
          <RatingContainer>
            <FaStar color="#FFC531" aria-hidden />
            <RatingMeta>
              {rating} ({reviews.length}{' '}
              {reviews.length === 1 ? 'review' : 'reviews'})
            </RatingMeta>
          </RatingContainer>
          <LocationContainer>
            <p>
              <LuMapPin aria-hidden />
              {location}
            </p>
          </LocationContainer>
        </CamperRatingLocation>
        <PriceRow>
          <CamperPrice>{formatCamperPrice(price)}</CamperPrice>
        </PriceRow>
        <GalleryRow aria-label="Camper photos">
          {gallerySrc.map((src, i) => (
            <GalleryImg key={i} src={src} alt={`${name}, photo ${i + 1}`} />
          ))}
        </GalleryRow>

        {description ? (
          <>
            <DescriptionText
              ref={descRef}
              $expanded={descriptionExpanded}
            >
              {description}
            </DescriptionText>
            {(hasMoreDescription || descriptionExpanded) && (
              <ReadMoreButton
                type="button"
                aria-expanded={descriptionExpanded}
                onClick={() => setDescriptionExpanded(v => !v)}
              >
                {descriptionExpanded ? 'Show less' : 'Read more'}
              </ReadMoreButton>
            )}
          </>
        ) : null}
        <FeatureList>
          <FeaturesItem>
            <IoPeopleOutline aria-hidden />
            {adults} adults
          </FeaturesItem>
          <FeaturesItem>
            <TbAutomaticGearbox aria-hidden />
            {transmission}
          </FeaturesItem>
          <FeaturesItem>
            <LuFuel aria-hidden />
            {engine}
          </FeaturesItem>

          {kitchen >= 1 && (
            <FeaturesItem>
              <TbToolsKitchen2 aria-hidden />
              Kitchen
            </FeaturesItem>
          )}

          <FeaturesItem>
            <IoBedOutline aria-hidden />
            {beds} beds
          </FeaturesItem>

          {ac >= 1 && (
            <FeaturesItem>
              <BsWind aria-hidden />
              AC
            </FeaturesItem>
          )}
        </FeatureList>

        <TabBar role="tablist" aria-label="Camper information">
          <Tab
            type="button"
            role="tab"
            id={tabFeaturesId}
            aria-selected={activeTab === 'features'}
            aria-controls={panelFeaturesId}
            tabIndex={activeTab === 'features' ? 0 : -1}
            $active={activeTab === 'features'}
            onClick={() => setActiveTab('features')}
          >
            Features
          </Tab>
          <Tab
            type="button"
            role="tab"
            id={tabReviewsId}
            aria-selected={activeTab === 'reviews'}
            aria-controls={panelReviewsId}
            tabIndex={activeTab === 'reviews' ? 0 : -1}
            $active={activeTab === 'reviews'}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </Tab>
        </TabBar>

        <TabPanel
          id={panelFeaturesId}
          role="tabpanel"
          aria-labelledby={tabFeaturesId}
          hidden={activeTab !== 'features'}
        >
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
                <SpecTerm>{formatSpecLabel(key)}</SpecTerm>
                <SpecDef>{String(val)}</SpecDef>
              </Fragment>
            ))}
          </SpecGrid>
        </TabPanel>

        <TabPanel
          id={panelReviewsId}
          role="tabpanel"
          aria-labelledby={tabReviewsId}
          hidden={activeTab !== 'reviews'}
        >
          <ReviewsList>
            {reviews.length === 0 ? (
              <ReviewItem>No reviews yet.</ReviewItem>
            ) : (
              reviews.map((rev, idx) => (
                <ReviewItem key={idx}>
                  <ReviewHeader>
                    <span>{rev.reviewer_name}</span>
                    <span>
                      <FaStar color="#FFC531" aria-hidden /> {rev.reviewer_rating}
                    </span>
                  </ReviewHeader>
                  <p>{rev.comment}</p>
                </ReviewItem>
              ))
            )}
          </ReviewsList>
        </TabPanel>

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
